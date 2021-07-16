let color;
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: "Level1" })
    }

    create() {
        this.textures.once('addtexture', function () {
            this.add.sprite(game.config.width / 2, game.config.height / 2, "sprGame");
        console.log('aaa');
        }, this);

        const e  = this.textures.get("sprGame");
        console.log(e);
        color = this.textures.getPixel(150,0,"sprGame");
        console.log(color);
    }
}