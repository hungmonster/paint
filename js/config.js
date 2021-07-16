let WINDOW_WIDTH = 720,
    WINDOW_HEIGHT = 1280;
let game;

let config = {
    type: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? Phaser.CANVAS : Phaser.AUTO,
    backgroundColor: "blue",
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    pixelArt: true,
    scene: [Preload, Level1]
};

game = new Phaser.Game(config);