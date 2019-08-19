class Charachter {
    title: string;
    constructor(title: string) {
        this.title = title
    }

    private healthPoints: number = Math.floor(Math.random()*21)
    private attackPoints: number = 0;
    private diceRolls: number[] = [];

    get getAttackPoints(): number {
        const attackPoints = this.attackPoints;
        return attackPoints;
    }

    set setAttackPoints(value: number) {
        if(typeof value !== "number") {
            throw new Error("Points must be only numbers")
        } else {
            this.attackPoints = value;
        }
    }

    get gethealthPoints(): number {
        const healthPoints = this.healthPoints;
        return healthPoints;
    }

    set sethealthPoints(value: number) {
        if(typeof value !== "number") {
            throw new Error("Points must be only numbers")
        } else {
            this.healthPoints = value;
        }
    }
    
    public initGame = (rollTimes: number, diceSides: number, enemy: Charachter): void => {
        while(this.healthPoints > 0 && enemy.healthPoints > 0) {
            this.diceRoll(rollTimes, diceSides);
            enemy.diceRoll(rollTimes, diceSides);
            if(this.attackPoints > enemy.attackPoints) {
                console.log(`${this.title} (${this.healthPoints}) attacks ${enemy.title} (${enemy.healthPoints}).Hit: ${this.diceRolls.join(' + ')} = ${this.diceRolls.reduce((a: number,b: number) => a + b)}`)
                enemy.healthPoints -= this.attackPoints;
            } else if(enemy.attackPoints > this.attackPoints) {
                console.log(`${enemy.title} (${enemy.healthPoints}) attacks ${this.title} (${this.healthPoints}).Hit: ${enemy.diceRolls.join(' + ')} = ${enemy.diceRolls.reduce((a: number,b: number) => a + b)}`)
                this.healthPoints -= enemy.attackPoints;
            } else {
                console.log('Draw!Reroll!')
                this.diceRoll(rollTimes, diceSides);
                enemy.diceRoll(rollTimes, diceSides);
            }
        }
        if(this.healthPoints <= 0) return console.log("GAME OVER!YOU ARE DEAD!")
        if(enemy.healthPoints <= 0) return console.log("GAME OVER!YOU'VE WON!")
    }

    private diceRoll = (times: number, sides: number) => {
        this.diceRolls = []
        for(let i: number = 0; i < times; ++i) {
            let roll = Math.floor(Math.random()*++sides);
            this.attackPoints += roll
            this.diceRolls.push(roll)
        }
    }
}

class Hero extends Charachter {
    constructor() {
        super('Hero')
    }
}

class Monster extends Charachter {
    constructor() {
        super('Monster')
    }
}

new Hero().initGame(2, 6, new Monster());