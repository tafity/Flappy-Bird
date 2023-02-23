class Game {
    constructor() {
        this._config = new Config()
        this._canvas = this._config.canvas
        this._frames = this._config.frames
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._draw = new CanvasDrawing()
        this._bird = new Bird();
        this._messages = new Messages()
    }

    update() {

    }

    reset() {
        this._bird({
            x:  this._config.birdCoordinats.x,
            y:  this._config.birdCoordinats.y,
            w:  this._config.birdCoordinats.w,
            h:  this._config.birdCoordinats.h,
            frames:  this._config.frames,
            sprite: this._sprite
        })
    }
    draw() {
        this._draw.drawImage();
        this._bird.drawImage();
        this._messages.drawImage();
    }
    loop() {
        this.draw();
        this._frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start(){
        this.loop();
    }
}