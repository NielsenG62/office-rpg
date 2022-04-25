export default class Character {
  constructor(hp, attack, evade, defense){
    this.hp = hp;
    this.atk = attack;
    this.eva = evade;
    this.def = defense;
    this.lvl = 1;
    this.maxHp = hp;
    this.money = 0;
    this.inventory = [];
    this.classType = {};
  }

  class(classType) {
    if (classType === "Fighter") {
      this.hp = 80;
      this.atk = 75;
      this.eva = 50;
      this.def = 40;
      this.maxHp = this.hp;
      this.classType = "Fighter";
    }else if (classType === "Rogue") {
      this.hp = 70;
      this.atk = 65;
      this.eva = 80;
      this.def = 30;
      this.maxHp = this.hp;
      this.classType = "Rogue";
    }else {
      this.hp = 90;
      this.atk = 50;
      this.eva = 30;
      this.def = 80;
      this.maxHp = this.hp;
      this.classType = "Tank";
    }
  }

  levelUp(){
    if (this.classType === "Fighter") {
      this.atk += 10;
    }else if (this.classType === "Rogue"){
      this.eva += 10;
    }else {
      this.def += 10;
    }
    
    return this.lvl++;
  }

  getItem(item) {
    if (item === "pen") {
      this.atk += 5;
    } else if (item === "pocket-protector") {
      this.def += 5;
    } else if (item === "coffee") {
      this.hp += 5;
    } else {
      this.eva += 5;
    }
  }
}
