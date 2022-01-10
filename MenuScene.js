class MenuScene extends Phaser.Scene{
  constructor(){
    super("MenuScene");
  }
  preload(){
    this.load.image('spaceship', 'spaceship.png');
    this.load.image('dirt','dirt2.png');
    this.load.image('stone','stone.png');
  } 
  create(){
    var stone = this.physics.add.image(600,100, 'stone').setScale(0.5);
    var dirt = this.dirt = this.physics.add.image(100,100, 'dirt').setScale(0.5);
    var spaceship = this.spaceship = this.physics.add.image(650,300, 'spaceship');

    dirt.setVelocity(500,300);
    dirt.setBounce(1,1);
    dirt.setCollideWorldBounds(true);
  
    this.physics.add.collider(spaceship,dirt);
    spaceship.setVelocity(0,-500);
    spaceship.setCollideWorldBounds(false);
 
    stone.setVelocity(500,300);
    stone.setBounce(1,1);
    stone.setCollideWorldBounds(true);
    this.physics.add.collider(dirt,stone);
    this.physics.add.collider(stone,spaceship);
}
   update() {
     this.spaceship.y += -10;
     
     if (this.spaceship.y < -config.height) {
       this.spaceship.y = 800;
    }
     if (this.spaceship.y > config.height) {
       this.spaceship.y = -120;
     }
     if (this.spaceship.x > config.width) {
       this.spaceship.x = -80;
     }
     if (this.spaceship.x < -config.width) {
       this.spaceship.x = 1300;
     }
   } 
 }
 
