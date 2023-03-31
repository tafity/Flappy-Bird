class Bird {
    constructor() {
      this._sprite = new Image(606, 428)
      this._sprite.src = 'spritesheet/sprite.png'
      this._canvas = document.getElementById('canvas');
      this._config = new Config()
      this._animationFrames = this._config.animationFrames
      this._birdCoordinats = this._config.birdCoordinats
      this._frames = this._config.frames
      this._draw = new CanvasDrawing();
      this._ctx = this._draw.ctx
      this._canvas = document.getElementById('canvas')
      this.gameState = this._config.gameState
      this._getReadyMessage = this._config.getReadyMessage
      this._gameOverMessage = this._config.gameOverMessage
      this.frame = 0
      this.speed = this._config.speed
      this.gravity = this._config.gravity
      this.jump = this._config.jump
      this._ground = this._config.ground
    }
  
    drawImage() {
      //отрисовка птички
      this._bird = this._animationFrames[this.frame]
      this._ctx.drawImage(this._sprite, this._bird.sX, this._bird.sY, this._birdCoordinats.w, this._birdCoordinats.h, this._birdCoordinats.x - this._birdCoordinats.w / 2, this._birdCoordinats.y - this._birdCoordinats.h / 2, this._birdCoordinats.w, this._birdCoordinats.h);
  
      //сообщение о конце игры 
      if (this.gameState.current == this.gameState.over) {
        this._ctx.drawImage(this._sprite, this._gameOverMessage.sX, this._gameOverMessage.sY, this._gameOverMessage.w, this._gameOverMessage.h, this._gameOverMessage.x, this._gameOverMessage.y, this._gameOverMessage.w, this._gameOverMessage.h)
      }
      //сообщение о начале игры 
      if (this.gameState.current == this.gameState.getReady) {
        this._ctx.drawImage(this._sprite, this._getReadyMessage.sX, this._getReadyMessage.sY, this._getReadyMessage.w, this._getReadyMessage.h, this._getReadyMessage.x, this._getReadyMessage.y, this._getReadyMessage.w, this._getReadyMessage.h)
      }

      //отрисовка земли
      this._ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x, this._ground.y, this._ground.w, this._ground.h);
      this._ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x + this._ground.w, this._ground.y, this._ground.w, this._ground.h);
    }
  
    update() {
      //регулировка скорости взмахов крыльев
      this.period = this.gameState.current == this.gameState.getReady ? 10 : 5
      this.frame += this._frames % this.period == 0 ? 1 : 0
      this.frame = this.frame % this._animationFrames.length

      //логика падения птички
      if (this.gameState.current == this.gameState.getReady) {
         this._birdCoordinats.y = 150
      } else {
        this.speed += this.gravity
        this._birdCoordinats.y += this.speed
        this.fall();
          if (this.speed >= this.jump) {
            this.frame = 1
          }
         
    }
    }

    fall(){
       //делаем так, чтобы птичка не падала за пределы земли
       if (this._birdCoordinats.y + this._birdCoordinats.h / 2 >= this._config.canvas.height - this._config.ground.h) {
        this._birdCoordinats.y = this._config.canvas.height - this._config.ground.h - this._birdCoordinats.h / 2;
      if (this.gameState.current == this.gameState.game) {
          this.gameState.current = this.gameState.over
        }
      }
    }

    stages() {
      //реализовываем логику стадий игры 
      this._canvas.addEventListener('click', (e) => {
        switch (this.gameState.current) {
          case this.gameState.getReady:
            this.gameState.current = this.gameState.game;
            break;
          case this.gameState.game:
            this.flap(); 
            break;
          case this.gameState.over:
            this.gameState.current = this.gameState.getReady;
            this._birdCoordinats.y = 150;
            break;
        }
      })
      //управление на пробеле
    }
    flap() {
      //управление птичкой 
      this.speed = - this.jump
    }
    move() {
       //создаем видимость движения птички вперед, двигая землю
      if (this.gameState.current == this.gameState.game) {
          this._ground.x = (this._ground.x - this._ground.dx) % (this._ground.w/2)
          }
      } 
  }