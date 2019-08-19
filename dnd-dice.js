"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Charachter = /** @class */ (function () {
    function Charachter(title) {
        var _this = this;
        this.healthPoints = Math.floor(Math.random() * 21);
        this.attackPoints = 0;
        this.diceRolls = [];
        this.initGame = function (rollTimes, diceSides, enemy) {
            while (_this.healthPoints > 0 && enemy.healthPoints > 0) {
                _this.diceRoll(rollTimes, diceSides);
                enemy.diceRoll(rollTimes, diceSides);
                if (_this.attackPoints > enemy.attackPoints) {
                    console.log(_this.title + " (" + _this.healthPoints + ") attacks " + enemy.title + " (" + enemy.healthPoints + ").Hit: " + _this.diceRolls.join(' + ') + " = " + _this.diceRolls.reduce(function (a, b) { return a + b; }));
                    enemy.healthPoints -= _this.attackPoints;
                }
                else if (enemy.attackPoints > _this.attackPoints) {
                    console.log(enemy.title + " (" + enemy.healthPoints + ") attacks " + _this.title + " (" + _this.healthPoints + ").Hit: " + enemy.diceRolls.join(' + ') + " = " + enemy.diceRolls.reduce(function (a, b) { return a + b; }));
                    _this.healthPoints -= enemy.attackPoints;
                }
                else {
                    console.log('Draw!Reroll!');
                    _this.diceRoll(rollTimes, diceSides);
                    enemy.diceRoll(rollTimes, diceSides);
                }
            }
            if (_this.healthPoints <= 0)
                return console.log("GAME OVER!YOU ARE DEAD!");
            if (enemy.healthPoints <= 0)
                return console.log("GAME OVER!YOU'VE WON!");
        };
        this.diceRoll = function (times, sides) {
            _this.diceRolls = [];
            for (var i = 0; i < times; ++i) {
                var roll = Math.floor(Math.random() * ++sides);
                _this.attackPoints += roll;
                _this.diceRolls.push(roll);
            }
        };
        this.title = title;
    }
    Object.defineProperty(Charachter.prototype, "getAttackPoints", {
        get: function () {
            var attackPoints = this.attackPoints;
            return attackPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Charachter.prototype, "setAttackPoints", {
        set: function (value) {
            if (typeof value !== "number") {
                throw new Error("Points must be only numbers");
            }
            else {
                this.attackPoints = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Charachter.prototype, "gethealthPoints", {
        get: function () {
            var healthPoints = this.healthPoints;
            return healthPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Charachter.prototype, "sethealthPoints", {
        set: function (value) {
            if (typeof value !== "number") {
                throw new Error("Points must be only numbers");
            }
            else {
                this.healthPoints = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Charachter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super.call(this, 'Hero') || this;
    }
    return Hero;
}(Charachter));
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        return _super.call(this, 'Monster') || this;
    }
    return Monster;
}(Charachter));
new Hero().initGame(2, 6, new Monster());
