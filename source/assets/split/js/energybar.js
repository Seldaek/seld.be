var EnergyBar = function (game, energy, force) {
    this.game = game;
    this.energyNode = energy;
    this.forceNode = force;
};

EnergyBar.prototype.reset = function () {
    this.energy = 0;
    this.force = 0;
    this.pressed = false;
};

EnergyBar.prototype.tick = function (multiplier) {
    var energyMultiplier;

    energyMultiplier = multiplier / Math.log(Math.max(2, this.game.nodes.length));
    this.energy = Math.min(1, this.energy + energyMultiplier * 0.5 * this.game.difficulty);
    if (this.pressed) {
        this.force = Math.min(this.energy, this.force + multiplier);
    }
};

EnergyBar.prototype.draw = function () {
    this.forceNode.style.width = Math.round(this.force * 100).toString() + '%';
    this.energyNode.style.width = Math.round(this.energy * 100).toString() + '%';
};

EnergyBar.prototype.start = function () {
    this.pressed = true;
};

EnergyBar.prototype.stop = function () {
    var force = Math.max(0.2, this.force);

    this.pressed = false;
    this.force = 0;

    if (this.energy < 0.15) {
        return 0;
    }

    if (this.game.soundManager) {
        this.game.soundManager.play('discharge');
    }

    this.energy -= force;

    return force;
};