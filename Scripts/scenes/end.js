var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this.GameOverSound = createjs.Sound.play("GameovSound");
            this.GameOverSound.volume = 0.1;
            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Dock51", "Red", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH, 360, true);
            this._MenuButton = new objects.Button("MenuButton", config.Screen.HALF_WIDTH, 420, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._ocean.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._ocean);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._restartButton);
            this.addChild(this._MenuButton);
            this._restartButton.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._MenuButton.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map