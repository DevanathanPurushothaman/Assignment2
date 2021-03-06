namespace objects {
    export class Stone extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Stone.
       * @memberof Stone
       */
      constructor() {
        super("stone");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.y > config.Screen.HEIGHT + this.halfHeight) {
          this.Reset();
        //  createjs.Tween.get(this).to({rotation:360},3000);
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
      //   createjs.Tween.get(this).to({rotation:360},3000);
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
      //  createjs.Tween.get(this).to({rotation:360},3000);
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
        this._horizontalSpeed = Math.floor((Math.random() * 4) -2); // between -2 and 2 ppf
        this.y = -this.height;
        this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      //  createjs.Tween.get(this).to({rotation:360},3000);
      }
    }
  }
  