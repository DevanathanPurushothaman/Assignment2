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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._stoneNum; count++) {
                this._stones.push(new objects.Stone());
                //this._stones[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this.Rocket = new objects.Rocket();
            this._space = new objects.Space();
            this.Spaceman = new objects.Spaceman();
            // creates an empty array of type stone
            this._stones = new Array();
            this._stoneNum = 3;
            this._buildClouds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this.Rocket.Update();
            this._space.Update();
            this.Spaceman.Update();
            managers.Collision.check(this.Rocket, this.Spaceman);
            this._stones.forEach(function (stone) {
                stone.Update();
                managers.Collision.check(_this.Rocket, stone);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the space to the scene
            this.addChild(this._space);
            // adding the scpaceman to the scene
            this.addChild(this.Spaceman);
            // adding the rocket to the scene
            this.addChild(this.Rocket);
            // adding the stone to the scene
            for (var _i = 0, _a = this._stones; _i < _a.length; _i++) {
                var stone = _a[_i];
                this.addChild(stone);
            }
            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map