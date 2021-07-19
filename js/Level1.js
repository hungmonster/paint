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

        let baseWidth = 1200;
        let baseHeight = 725;
        let areas = [
            {
                pathData:
                    'M150 0 L75 200 L225 200 Z',
                color: '#ada5a5'
            },
            {
                pathData:
                    'M 979 335.485 V 374 l 4.901 0.68 l -1.728 1.462 c 0 0 -0.266 0 -0.133 0.664 s 0.133 0.664 0.133 0.664 l 16.457 0.338 c 0 0 -7.761 -6.265 -7.761 -15.5 c 0 -9.234 8.13 -14.672 8.13 -14.672 V 341 h 6 v 7 c 0 0 6.393 4.798 6.393 14.564 s -2.814 11.436 -5.63 15.436 H 1021 c 0 0 -6.008 -6.109 -5.078 -14.879 c 0.93 -8.769 2.26 -9.832 3.986 -13.287 l 0.42 -7.573 l 4.672 -0.398 V 349 c 0 0 3.543 6.017 4.208 7.744 s 0.799 8.768 0.532 10.496 s -1.596 7.633 -3.189 10.761 H 1055 v -11 c 0 0 -6.792 -0.689 -6.792 -5.075 c 0 -4.385 1.727 -5.448 3.188 -5.979 l 9.035 0.266 c 0 0 2.126 -0.02 2.923 3.038 s 1.195 3.75 1.195 3.75 h 2.45 l 1.802 0.785 l 2.259 1.86 l 0.93 3.188 l -0.93 1.462 l -1.196 2.524 l -1.992 0.664 l -1.066 2.524 l 4.385 2.126 l 2.125 0.405 l 1.595 -7.049 l -0.664 -3.853 l 0.664 -7.574 l 2.126 -2.125 c 0 0 2.524 1.263 2.524 1.628 s -0.266 4.35 0 4.882 s 1.595 2.79 1.595 2.79 s -0.133 0.798 0 1.728 s 0.531 -6.467 0.531 -6.467 l 0.797 -2.933 c 0 0 -0.001 0.299 0.93 0 s 4.252 0 4.252 0 s 0.532 -1.362 1.063 1.428 s 0.267 5.446 0 5.979 s -0.683 1.595 -0.683 1.595 l 0.954 8.237 V 379 h 13 l -0.248 -45.508 L 979 335.485 ZM 980 332 h 18 v -22 h 2 v -2 l -2 -1.341 V 305 l -0.189 -2.71 L 1000 300 h 3 c 0 0 4.43 0.101 5.21 0 s 3.64 0.101 4.42 0 s 3.381 0.043 5.46 -0.029 s 10.919 -0.008 10.919 -0.008 s 2.6 -0.249 3.38 -0.026 s 5.46 1.002 5.46 1.002 l 7.02 -1.095 l 17.995 -1.245 l 2.137 2.86 V 305 l -1.153 0.879 l 5.46 0.78 l 6.239 -0.78 c 0 0 4.597 -0.26 5.376 0 c 0.781 0.26 4.078 2.34 4.078 2.34 V 311 l -4.515 1.899 l 1.3 2.401 l 0.26 14.498 l 18.955 -0.26 V 287 l -121 4.62 V 332 ZM 1091.08 270.167 l -0.084 3.667 V 277 l 0.5 2 l 2 0.5 l 1.333 0.5 H 1101 v -39 l -121 7.167 V 285 h 8 l -1.368 -3.612 L 988 279 h 3 v -2 l 1 -3.623 V 271 v -4 l -1 -2.982 V 260 c 0 0 -1.249 -3.002 -0.209 -3.782 s 8.319 0 8.319 0 s 1.82 0 1.82 1.56 s 0.78 3.38 0 4.68 s -2.595 2.6 -3.376 3.64 c -0.779 1.04 -1.555 2.437 -1.555 4.338 s 0 4.564 0 4.564 c 0.251 1.497 0.326 3.317 0.326 3.317 l 2.674 3.64 V 283 l 2.143 0.517 c 0 0 1.857 -0.52 1.857 -2.34 s 0 -9.177 0 -9.177 v -9 l 7.03 -1.322 l 1.916 -9.1 l 51.054 -2.34 V 282 l 6.613 -0.563 l 2.387 -2.859 V 275 v -3 v -4 v -5 l 1.466 -3.402 l -1.843 -3.38 l -2.623 -2.08 V 253 l 1.346 -0.761 l 0.78 -4.239 H 1073 h 5 l 1.186 2.759 l 1.981 3.241 l -2.334 2.333 l -1.166 1.167 c 0 0 0 2.5 0.333 3 s 0.416 2.833 0.416 4 S 1078 275.167 1078 275.167 V 278 l 1.167 1.333 l 1 1 l 2.333 0.167 l 2.834 -0.833 l 1.666 -3 V 272 l -1 -3 v -7 l 0.333 -2.167 L 1087 257 l -1.333 -1.167 l -1.334 -1.333 l -1.333 -2.333 l 1.333 -0.833 l 0.834 -0.833 l 1.166 -2.5 H 1092 l 1 0.833 V 251 l 2.5 1.333 l -3 3 l -2.167 1.5 l 0.334 3.167 l 1.166 3.167 l -0.166 4.167 L 1091.08 270.167 ZM 976 155.833 L 976 234.667 L 1112.67 223.667 L 1113 411 L 1173 411 L 1174 434 L 1200 434 L 1200 122 ZM 1007 384 l 2.922 1.922 l 5.805 1.548 l 2.619 1.935 l 1.654 2.129 V 395 l -0.984 4.853 l 2.515 0.388 c 0 0 0.969 -0.387 1.549 0 s 2.708 0.773 2.708 0.773 l 2.322 -1.935 l 2.348 2.999 l 2.543 1.838 V 407 l -2 1.946 V 410 l -1.149 3.978 l 0.58 4.063 l -3.869 4.45 l 0.387 1.965 L 1040.5 424 h 6.5 v -5 l 12.647 0.201 l -5.031 -4.067 l -0.58 -2.134 H 1058 l 3.211 0.396 l 0.789 -0.193 V 411 l 2.678 -1 H 1066 c 0 0 1.579 0 2.547 0 s 2.453 0 2.453 0 l 1.03 2 h 2.97 c 0 0 3.222 -0.152 3.802 0.235 s 2.228 1.936 2.228 1.936 l 3.971 0.58 V 419 l 2 1.942 V 425 h 15 v -42 l -95 -1.048 V 384 ZM 981 421.525 l 22 -0.035 V 416 v -3 v -3 v -1 l -1.011 -1 H 999 l -0.301 -0.988 l -1.935 0.968 l -1.741 0.58 l -4.257 -1.548 l -0.967 -3.096 l 3.096 -0.968 l -1.14 -1.935 l -1.183 -2.128 l -0.58 -2.137 L 990.38 395 H 992 l 2.637 -1.146 c 0 0 2.128 -0.968 2.321 -1.548 s 2.321 -1.74 2.902 -2.708 s 0.967 -1.935 1.548 -2.709 s 1.775 -4.257 1.775 -4.257 l 2.732 -0.693 L 981 381.665 V 421.525 ZM 1005.92 381.939 L 1007 381.952 L 1007 381.665 ZM 1021.92 419.008 L 1019.79 415.296 L 1021 413 L 1021 408.56 L 1019.14 408.946 L 1011 407.592 L 1008.18 409.14 L 1010.11 412.042 L 1011 415 L 1011 417 L 1011 423 L 1012 423 L 1024.43 423 L 1023.66 420.749 Z',
                color: '#ada5a5'
            }
        ];

        let widthSvg = 300;
        let heightSvg = 300;
        let svg = document.createElement('svg');

        svg.innerHTML = `<path d="M150 0 L75 200 L225 200 Z" />`;
        svg.setAttribute("id", "polygon")
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        svg.setAttribute("height", `${heightSvg}`)
        svg.setAttribute("width", `${widthSvg}`)
        svg.setAttribute("fill", "red")
        svg.setAttribute("stroke", "currentColor")
        svg.setAttribute("stroke-width", "2")

        // let aaa = document.querySelector("svg");
        // let ctx = aaa.getContext("2d");
        // aaa.addEventListener('click', function (e) {
            // e.currentTarget.setAttribute('fill', '#ff00cc');
        // });

        // aaa.addEventListener("click", (event) => {
        //     doc
        //     console.log('click');
        // })

        var canvas = document.querySelector('canvas');
        
        canvas.appendChild(svg);
        console.log(canvas);
        // var canvas = document.querySelector('canvas');
        // let ctx = canvas.getContext('2d');

        // var img = new Image;
        // img.src = 'https://pbs.twimg.com/profile_images/935773904790065153/PCdma_TG_400x400.jpg';

        // img.onload = function () {
        //     var canvasW = canvas.width, canvasH = canvas.height;
        //     var imgW = img.naturalWidth || canvasW, imgH = img.naturalHeight || canvasH;

        //     var ratio = canvasW / imgW;

        //     console.log(imgW, imgH, canvasW, canvasH);

        //     ctx.drawImage(img, 0, 0, imgW * ratio, imgH * ratio);
        // }

    }

    update() {
    }

}

class AssetStatic extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);
        scene.add.existing(this);
    }
}
