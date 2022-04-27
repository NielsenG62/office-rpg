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
      this.atk += 5;
      this.inventory.push(item);
    } else if (item.name === "pocket-protector") {
      this.def += 5;
      this.inventory.push(item);
    } else if (item.name === "stapler") {
      this.eva += 5;
      this.inventory.push(item);
    } else if (item.name === "espresso" || item.name === "mocha" || item.name === "latte") {
      this.inventory.push(item);
    } else {
      console.log("something went wrong");
    }
  }

  consume(item) {
    const index = Character.items.indexOf(item);
    if (item === "espresso"){
      this.hp += 50;
      Character.items.splice(index, 1);
    }else if (item === "mocha"){
      this.hp += 30;
      Character.items.splice(index, 1);
    }else {
      this.hp += 10;
      Character.items.splice(index, 1);
    }
  }
}
