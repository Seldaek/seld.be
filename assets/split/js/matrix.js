var Matrix = function (speed, w, h) {
    this.w = w;
    this.h = h;
    this.baseSpeed = speed;
};

Matrix.prototype.reset = function () {
    this.speed = this.baseSpeed;
    this.x = 0;
    this.y = this.h;
    this.floatY = this.y;
};

Matrix.prototype.setSpeed = function (speed) {
    this.speed = speed;
};

Matrix.prototype.map = function (x, y) {
    return [Math.floor(this.x + x), Math.floor(this.y - y)];
};

Matrix.prototype.tick = function (multiplier) {
    this.floatY += this.speed * multiplier;
    this.y = Math.floor(this.floatY);
};

Matrix.prototype.isVisible = function (x, y) {
    if (this.x + this.w + 50 < x || this.x - 50 > x) {
        return false;
    }

    if (this.y + 50 < y || this.y - this.h - 50 > y) {
        return false;
    }

    return true;
};
