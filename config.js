class Config {
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

    animationFrames = [
        {sX:276, sY:112},
        {sX:276, sY:139},
        {sX:276, sY:164},
        {sX:276, sY:139},
     ]
    birdCoordinats = {
                x: 50,
                y: 60,
                w: 34,
                h: 26

        }
    frames = 0
   
    getReadyMessage = {
        sX: 0,
        sY: 228,
        w: 173,
        h: 152,
        x: this.canvas.width/2 - 173/2,
        y: 80
    }
}