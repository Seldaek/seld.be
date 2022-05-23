var Node = function (game, matrix, x, y, angle, speed) {
    this.game = game;
    this.matrix = matrix;

    this.isSplit = false;
    this.isAlive = true;

    this.x = x;
    this.y = y;
    this.mappedX = x;
    this.mappedY = y;

    this.baseSpeed = matrix.speed;
    this.speed = speed || this.baseSpeed;
    this.baseAngle = deg2rad(90);
    this.angle = deg2rad(angle || 90);
    this.accel = 0;
};

var NodeImage = new Image();
NodeImage.src = 'img/ball_20.png';

Node.prototype.tick = function (multiplier) {
    var coords;

    this.x += this.speed * Math.cos(this.angle) * multiplier;
    this.y += this.speed * Math.sin(this.angle) * multiplier;

    coords = this.matrix.map(this.x, this.y);
    this.mappedX = coords[0];
    this.mappedY = coords[1];

    if (this.isAlive) {
        // normalize angle
        if (this.angle !== this.baseAngle) {
            this.angle += (this.baseAngle - this.angle) * 0.5 * multiplier;
            if (Math.abs(this.angle - this.baseAngle) < 0.13) {
                this.angle = this.baseAngle;
            }

            // check if we hit the border while we are not running in a straight line
            if ((this.x > this.matrix.w - 3) || (this.x < 3)) {
                this.bounce();
            }
        } else if (this.mappedY > this.matrix.h - 40) {
            // speed up nodes if their vector is normalized and they fly too low
            this.speed = this.baseSpeed * (1.1 + Math.random() * 0.2);
        }

        // slow down nodes if they are too high
        if (this.mappedY < this.matrix.h - 140) {
            this.speed = this.baseSpeed * (1 - Math.random() * 0.2);
        }

        // decelerate nodes after they spawn
        if (this.speed > this.baseSpeed * 1.5) {
            this.speed += (this.baseSpeed - this.speed) * multiplier;
        }
    }

    if (!this.matrix.isVisible(this.x, this.y)) {
        this.game = null;
        this.matrix = null;

        return false;
    }

    return true;
};

Node.prototype.bounce = function () {
    var degAngle = rad2deg(this.angle),
        degBaseAngle = rad2deg(this.baseAngle);

    this.angle = deg2rad(- degAngle + 180);
};

Node.prototype.draw = function (ctx, trails) {
    ctx.drawImage(NodeImage, this.mappedX - 11, this.mappedY - 10);

    trails.ctx.fillStyle = '#8faec8';
    trails.ctx.beginPath();
    trails.ctx.arc(this.mappedX, this.mappedY, 2+Math.random()*2, 0, Math.PI*2, true);
    trails.ctx.closePath();
    trails.ctx.fill();
};

Node.prototype.collide = function () {
    var newAngle,
        degAngle = rad2deg(this.angle);

    if (this.isAlive === false) {
        return;
    }
    this.isAlive = false;

    newAngle = - degAngle;
    while (newAngle > 180) {
        newAngle -= 360;
    }
    while (newAngle < -180) {
        newAngle += 360;
    }

    if (newAngle > 90) {
        newAngle = -170;
    }
    if (newAngle > 0) {
        newAngle = -10;
    }

    this.angle = deg2rad(newAngle);
};

Node.prototype.split = function (strength) {
    var str1, str2;

    if (this.isSplit === true || this.isAlive === false) {
        return;
    }

    this.isSplit = true;

    str1 = strength - 0.1 + Math.random() * 0.1;
    str2 = strength - 0.1 + Math.random() * 0.1;
    this.game.addNode(new Node(this.game, this.matrix, this.x, this.y, rad2deg(this.angle) + str1 * 90, this.speed + (2 * this.speed * str1)));
    this.game.addNode(new Node(this.game, this.matrix, this.x, this.y, rad2deg(this.angle) - str2 * 90, this.speed + (2 * this.speed * str2)));

    this.x = -500;
};
