var config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000FF',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH, 
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [LoadScene,MenuScene],
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: 350}
      }
    }
};

var game = new Phaser.Game(config);