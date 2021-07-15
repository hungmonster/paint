
let img;
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: "Level1" })
    }

    create() {
        this.textures.once('addtexture', function () {
            this.add.sprite(game.config.width / 2, game.config.height / 2, "sprGame");
        }, this);
        // this.setup();
    }


    preload() {
    }

    setup() {
        console.log('aaaaaaa');
        img = loadImage('india-map.gif');
        // createCanvas(400, 400);
    }

    draw() {
        background(220);
        image(img, 0, 0, width, height);
        loadPixels();
        const d = pixelDensity();

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const i = 4 * d * (y * d * width + x);
                const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]]; // get colors
                if (r <= 80 && b <= 80 && g <= 80) { // if r g b all less than 80 then color will appear black
                    noStroke();
                    fill(255, 0, 0);
                    ellipse(x, y, 1);
                }
            }
        }
        noLoop();
    }
}