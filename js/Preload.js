var nAssets = 1;
var nLoaded = 0;
class Preload extends Phaser.Scene {
    constructor() {
        super({ key: "Preload" });
    }

    create() {
        this.textures.addBase64("sprGame", sprGame);
        nLoaded++;

        if (nLoaded >= nAssets) {
            var actualCreate = this.createGameObjects.bind(this);
            actualCreate();
        }
    };
    createGameObjects() {
        this.scene.start("Level1");
    }
}
