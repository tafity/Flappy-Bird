/*class Canvas {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.element = document.body.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 320
        this.canvas.height = 480
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config();

// информация по заднему фону
        this._background = this._config.background
        this._ground = this._config.ground

//информация по птичке
        this._bird = new Bird();
        this._animationFrames = this._config.animationFrames
        this._birdCoordinats = this._config.birdCoordinats
        this.frames = this._config.frames
        this._bird = this._config.animationFrames[this._config.frames]
    }

    update() {

    }


    draw() {
        //отриасовка заднего фона канваса
        this.ctx.fillStyle = '#70c5ce'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this._sprite, this._background.sX, this._background.sY, this._background.w, this._background.h, this._background.x, this._background.y, this._background.w, this._background.h);
        this.ctx.drawImage(this._sprite, this._background.sX, this._background.sY, this._background.w, this._background.h, this._background.x + this._background.w, this._background.y, this._background.w, this._background.h);

        //отрисовка земли
        this.ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x, this._ground.y, this._ground.w, this._ground.h);
        this.ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x + this._ground.w, this._ground.y, this._ground.w, this._ground.h);
        
        //отрисовка птички
        this.ctx.drawImage(this._sprite, this._bird.sX, this._bird.sY, this._birdCoordinats.w,  this._birdCoordinats.h, this._birdCoordinats.x - this._birdCoordinats.w/2,  this._birdCoordinats.y - this._birdCoordinats.h/2, this._birdCoordinats.w, this._birdCoordinats.h )

        //отрисовка различных сообщений в игре
        //

    }

    loop() {
        this.draw();
        this.frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start() {
        this.loop();
    }
}*/
