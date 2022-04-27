export default class Enemy {
  constructor(hp, attack, evade, defense){
    this.hp = hp;
    this.maxHp = hp;
    this.atk = attack;
    this.eva = evade;
    this.def = defense;
    this.enemyType = {};
  }

  npcGen(type) {
    if (type === "Intern") {
      this.hp = 40;
      this.atk = 30;
      this.eva = 60;
      this.def = 30;
      this.enemyType = "Intern";
      this.maxHp = this.hp;
    }else if (type === "Energy Vampire") {
      this.hp = 60;
      this.atk = 50;
      this.eva = 70;
      this.def = 40;
      this.enemyType = "Energy Vampire";
      this.maxHp = this.hp;
    }else if (type === "Boss") {
      this.hp = 100;
      this.atk = 75;
      this.eva = 55;
      this.def = 70;
      this.enemyType = "Boss";
      this.maxHp = this.hp;
    }else {
      this.hp = 50;
      this.atk = 25;
      this.eva = 40;
      this.def = 50;
      this.enemyType = "Boss' Kid";
      this.maxHp = this.hp;
    }
  }
}