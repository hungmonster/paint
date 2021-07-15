/*GameStart*/
var nAssets = 1;
var nLoaded = 0;

class Preload extends Phaser.Scene {
    constructor() {
        super({ key: "Preload" });
    }

    createGameObjects() {

        this.scene.start("Level1");
    }

    create() {
        this.textures.addBase64("sprGame", sprGame);
        nLoaded++;

        this.scene.start("Level1");
        console.log(this.scene);
        if (nLoaded >= nAssets) {
            // var actualCreate = 
            this.createGameObjects.bind(this);
            // actualCreate();
        }
    };
}
/*Map*/
