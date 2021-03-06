module scenes {
    export class Instructon extends objects.Scene {
        // member variables
        private _gameInstructionLabel: objects.Label;
        private _gameInstructionLabel1: objects.Label;
        private _gameInstructionLabel2: objects.Label;
        private _StartButton: objects.Button;
        private _space: objects.Space;
        public GameOverSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._space = new objects.Space();
           // this.GameOverSound=createjs.Sound.play("GameovSound");
          //  this.GameOverSound.volume = 0.1;
            this._gameInstructionLabel = new objects.Label("Use the Mouse ", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 150, true);
            this._gameInstructionLabel1 = new objects.Label("To avoid the meteoroids", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 200, true);
            this._gameInstructionLabel2 = new objects.Label("And save the spaceceman", "30px", "Dock51", "Yellow", config.Screen.HALF_WIDTH, 250, true);
            this._StartButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._space.Update();
        }

        public Reset():void {0

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - Instruction SCENE`);

            this.addChild(this._space);

            this.addChild(this._gameInstructionLabel);
            this.addChild(this._gameInstructionLabel1);
            this.addChild(this._gameInstructionLabel2);
           // this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._StartButton);

            this._StartButton.on("click", function(){
               // this.GameStartSound.stop();
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}