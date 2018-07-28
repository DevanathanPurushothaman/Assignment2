module scenes {
    export class Play extends objects.Scene {
        // member variables
        private Rocket:objects.Rocket;
        private _space:objects.Space;
        private Spaceman:objects.Spaceman;
        private _stones:objects.Stone[];
        private _stoneNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._stoneNum; count++) {
                this._stones.push(new objects.Stone());
                //this._stones[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this.Rocket = new objects.Rocket();
            this._space = new objects.Space();
            this.Spaceman = new objects.Spaceman();

            // creates an empty array of type stone
            this._stones = new Array<objects.Stone>();
            this._stoneNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this.Rocket.Update();
            this._space.Update();
            this.Spaceman.Update();

            managers.Collision.check(this.Rocket, this.Spaceman);

            this._stones.forEach(stone => {
                stone.Update();
                managers.Collision.check(this.Rocket, stone);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the space to the scene
            this.addChild(this._space);

            // adding the scpaceman to the scene
            this.addChild(this.Spaceman);

            // adding the rocket to the scene
            this.addChild(this.Rocket);

            // adding the stone to the scene
            for (const stone of this._stones) {
                this.addChild(stone);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}