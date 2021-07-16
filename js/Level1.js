let color;
let totalColor;
let pixel;

let pixelGroup;
let yellowGroup;
let whiteGroup;
let colorRGB;
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: "Level1" })
    }
    preload() {
        this.load.image('gameImg', 'assets/imgbanana.png');
        this.load.image('frameImg', 'assets/frame.png');

    }

    create() {
        // this.textures.once('addtexture', function () {
        // }, this);

        var banana = new AssetStatic(this, game.config.width / 2, game.config.height / 2, "gameImg").setVisible(true).setScale(1.02);
        var frame = new AssetStatic(this, game.config.width / 2, game.config.height / 2, "frameImg").setVisible(true);

        // const e = this.textures.getFrame("gameImg");

        pixelGroup = this.add.group();
        yellowGroup = this.add.group();
        whiteGroup = this.add.group();

        yellowGroup.inputEnableChildren = true;

        // console.log(banana.width);
        // console.log(banana.height);
        // totalColor = banana.width + banana.height;


        //lọc pixel null
        for (let i = 0; i <= banana.width; i++) {
            for (let j = 0; j <= banana.heig ht; j++) {
                color = this.textures.getPixel(i, j, "gameImg");
                if (color !== null) {
                    colorRGB = color.r, color.g, color.b;
                    pixel = this.add.image(i, j, '').setInteractive();
                    pixel.setData("color", `${color.r},${color.g},${color.b}`);
                    pixel.setData("xPos", i);
                    pixel.setData("yPos", j);
                    pixel.setTintFill(this.rgbToHex(color.r, color.g, color.b));

                    if (colorRGB == "255,224,0") {
                        yellowGroup.add(pixel);
                    } else if (colorRGB == "229,229,229") {
                        whiteGroup.add(pixel);
                    }

                }
                if (i == banana.width && j == banana.height) {
                    banana.setVisible(true);
                }

            }
        }


        

        Phaser.Actions.SetHitArea(pixelGroup.getChildren());

        this.input.on('gameobjectdown', function (pointer, obj) {
            obj.setTintFill(0x000000);
            console.time();
            if (obj.getData("color") == "255,224,0") {
                for (var i = 0; i < yellowGroup.getChildren().length / 100; i++) {
                    yellowGroup.getChildren()[i].setTintFill(0x000000);
                }
            }
            console.timeEnd();
        });
    }

    rgbToHex(r, g, b) {
        return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    update() {
    }

    loadingState(current) {
    }
}

class AssetStatic extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);
        scene.add.existing(this);
    }
}
