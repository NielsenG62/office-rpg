export default class Enemy {
  constructor(hp, attack, evade, defense){
    this.hp = hp;
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
    }else if (type === "Energy Vampire") {
      this.hp = 60;
      this.atk = 50;
      this.eva = 80;
      this.def = 40;
      this.enemyType = "Energy Vampire";
    }else if (type === "Boss") {
      this.hp = 80;
      this.atk = 75;
      this.eva = 45;
      this.def = 65;
      this.enemyType = "Boss";
    }else {
      this.hp = 50;
      this.atk = 25;
      this.eva = 40;
      this.def = 50;
      this.enemyType = "Boss' Kid";
    }
  }
}