class Config {
//канвас
    canvas = {
        id: 'canvas',
        width: 320, 
        height: 480
    }

    background = {
        sX: 0,
        sY: 0,
        w: 275,
        h: 226,
        x: 0,
        y: this.canvas.height - 226
    }

    ground  = {
        sX: 276,
        sY: 0,
        w: 224,
        h: 112,
        x: 0,
        y: this.canvas.height - 112,
        
        dx : 2,
       }

//птичка
    animationFrames = [
        {sX:276, sY:112},
        {sX:276, sY:139},
        {sX:276, sY:164},
        {sX:276, sY:139},
     ]
    birdCoordinats = {
                x: 50,
                y: 150,
                w: 34,
                h: 26

        }
    frames = 0
// препятствия
    obstacles = {
        position: [],
        w : 53,
        h : 400,
        gap : 85,
        maxYPos : -150,
        dx : 2
    }
    topPipe = {
        sX : 553,
        sY : 0
    }
    bottomPipe = {
        sX : 502,
        sY : 0
    }

// сообщения
    getReadyMessage = {
        sX: 0,
        sY: 228,
        w: 173,
        h: 152,
        x: this.canvas.width/2 - 173/2,
        y: 80
    }

    gameOverMessage = {
        sX: 175,
        sY: 228,
        w: 225,
        h: 202,
        x: this.canvas.width/2 - 225/2,
        y: 90
    }

// логика 
    gameState = {
        current: 0,
        getReady: 0,
        game: 1, 
        over: 2
    }
}