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
      this.def = 75;
      this.maxHp = this.hp;
      this.classType = "Tank";
    }
  }

  levelUp(){
    if (this.classType === "Fighter") {
      this.atk += 2;
    }else if (this.classType === "Rogue"){
      this.eva += 2;
    }else if (this.classType === "Tank"){
      this.def += 2;
    } else {
      console.log("something went wrong");
    }
    
    return this.lvl++;
  }

  getItem(item) {
    if (item.name === "pen") {
      this.atk += 3;
      this.inventory.push(item);
    } else if (item.name === "pocket-protector") {
      this.def += 3;
      this.inventory.push(item);
    } else if (item.name === "stapler") {
      this.eva += 3;
      this.inventory.push(item);
    } else if (item.name === "latte") {
      this.hp += 30;
    } else if (item.name === "mocha") {
      this.hp += 50;
    } else if (item.name === "espresso") {
      this.hp += 70;
    } else if (item.name === "class-action-lawsuit") {
      this.hp += 50;
      this.att += 5;
      this.def += 5;
      this.eva += 5;
    } else if (item.name === "union-card") {
      this.hp += 15;
    } else {
      console.log("something went wrong");
    }
  }
}