var Trails = function (node, matrix) {
    this.canvas = node;
    this.matrix = matrix;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.areaX = 0;
    this.areaY = this.canvas.height / 2;
    this.areaWidth = this.canvas.width;
    this.areaHeight = this.canvas.height / 2;
};

Trails.prototype.draw = function (frame) {
    var imageData, i, len;

    while (this.processedFrames < frame) {
        imageData = this.ctx.getImageData(this.areaX, this.areaY, this.areaWidth, this.areaHeight);
        for (i = 0, len = imageData.data.length; i < len; i += 4) {
            imageData.data[i+3] *= 0.8;
        }
        this.ctx.putImageData(imageData, this.areaX, this.areaY + this.matrix.speed / 25);

        this.processedFrames++;
    }
};

Trails.prototype.reset = function () {
    this.processedFrames = 0;
}