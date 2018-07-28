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
var objects;
(function (objects) {
    var Rocket = /** @class */ (function (_super) {
        __extends(Rocket, _super);
        /**
         * Creates an instance of Rocket.
         * @memberof Rocket
         */
        function Rocket() {
            var _this = _super.call(this, "rocket") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Rocket.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Rocket.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 450;
        };
        Rocket.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Rocket.prototype.Reset = function () { };
        return Rocket;
    }(objects.GameObject));
    objects.Rocket = Rocket;
})(objects || (objects = {}));
//# sourceMappingURL=rocket.js.map