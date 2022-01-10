class LoadScene extends Phaser.Scene {
  constructor() {
    super("LoadScene");
  }
  preload() {
    this.load.image('start','assets/image/spaceship.png');
  }
  create() {
    var button = this.add.image(config.width/2.4,config.height/2.8, 'start').setOrigin(0, 0).setScale(2).setInteractive();

    button.on('pointerup', function () {
     if (1==1)
      {
       this.scene.start("MenuScene");
      }
    }, this);
    this.add.text(20,20,"Touch Spaceship for Start",{font: "48px"});
  }
}