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
    var Spaceman = /** @class */ (function (_super) {
        __extends(Spaceman, _super);
        /**
         * Creates an instance of Rockect.
         * @memberof Rockect
         */
        function Spaceman() {
            var _this = _super.call(this, "spaceman") || this;
            _this.Start();
            return _this;
            // createjs.Tween.get(this).to({rotation:360},3000);
        }
        // private methods
        Spaceman.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
                //createjs.Tween.get(this).to({rotation:360},3000);
            }
        };
        // public methods
        Spaceman.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
            // createjs.Tween.get(this).to({rotation:360},3000);
        };
        Spaceman.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Spaceman.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
            createjs.Tween.get(this).to({ rotation: 360 }, 20000);
        };
        return Spaceman;
    }(objects.GameObject));
    objects.Spaceman = Spaceman;
})(objects || (objects = {}));
//# sourceMappingURL=Spaceman.js.map