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
    var Stone = /** @class */ (function (_super) {
        __extends(Stone, _super);
        /**
         * Creates an instance of Stone.
         * @memberof Stone
         */
        function Stone() {
            var _this = _super.call(this, "stone") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Stone.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
                //  createjs.Tween.get(this).to({rotation:360},3000);
            }
        };
        // public methods
        Stone.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            //   createjs.Tween.get(this).to({rotation:360},3000);
            this.Reset();
        };
        Stone.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            //  createjs.Tween.get(this).to({rotation:360},3000);
            this._checkBounds();
        };
        Stone.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
            //  createjs.Tween.get(this).to({rotation:360},3000);
        };
        return Stone;
    }(objects.GameObject));
    objects.Stone = Stone;
})(objects || (objects = {}));
//# sourceMappingURL=stone.js.map