module scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _ocean: objects.Ocean;
        public GameOverSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Ocean();
            this.GameOverSound=createjs.Sound.play("GameovSound");
            this.GameOverSound.volume = 0.1;
            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Dock51", "Red", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._ocean);

            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._restartButton);

            this._restartButton.on("click", function(){
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}