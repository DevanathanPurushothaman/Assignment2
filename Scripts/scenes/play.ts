module scenes {
    export class Play extends objects.Scene {
        // member variables
        private Rocket:objects.Plane;
        private _space:objects.Ocean;
        private Spaceman:objects.Island;
        private _stones:objects.Cloud[];
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
                this._stones.push(new objects.Cloud());
                //this._stones[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this.Rocket = new objects.Plane();
            this._space = new objects.Ocean();
            this.Spaceman = new objects.Island();

            // creates an empty array of type Cloud
            this._stones = new Array<objects.Cloud>();
            this._stoneNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this.Rocket.Update();
            this._space.Update();
            this.Spaceman.Update();

            managers.Collision.check(this.Rocket, this.Spaceman);

            this._stones.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this.Rocket, cloud);
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

            // adding the ocean to the scene
            this.addChild(this._space);

            // adding the island to the scene
            this.addChild(this.Spaceman);

            // adding the plane to the scene
            this.addChild(this.Rocket);

            // adding the cloud to the scene
            for (const cloud of this._stones) {
                this.addChild(cloud);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}