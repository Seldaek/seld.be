var Block = function (game, matrix, x, y, w, h) {
    this.game = game;
    this.matrix = matrix;

    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.w = Math.ceil(w / 2) * 2;
    this.h = Math.ceil(h / 2) * 2;
};

Block.prototype.tick = function (multiplier) {
    if (!this.matrix.isVisible(this.x, this.y)) {
        this.game = null;
        this.matrix = null;

        return false;
    }

    return true;
};

Block.prototype.draw = function (ctx, collCtx) {
    var coords = this.matrix.map(this.x, this.y);

    ctx.save();
    ctx.shadowColor = "#ba2c65";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 5;
    ctx.fillStyle = '#ba2c65';
    ctx.fillRect(coords[0] - this.w / 2, coords[1] - this.h / 2, this.w, this.h);
    ctx.restore();
    ctx.fillStyle = '#aa285c';
    ctx.fillRect(coords[0] - this.w / 2 + 1, coords[1] - this.h / 2 + 1, this.w - 2, this.h - 2);

    collCtx.fillStyle = '#FF0000';
    collCtx.fillRect(coords[0] - this.w / 2 - 3, coords[1] - this.h / 2 - 3, this.w + 6, this.h + 6);
};
