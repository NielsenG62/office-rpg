class Character {
  constructor(hp, attack, evade, defense){
    this.hp = hp;
    this.atk = attack;
    this.eva = evade;
    this.def = defense;

    this.maxHp = hp;
    this.inventory = [];

  }

  class(classType) {
    if (classType === "Fighter") {
      this.hp = 80;
      this.atk = 75;
      this.eva = 50;
      this.def = 40;
    }else if (classType === "Rogue") {
      this.hp = 70;
      this.atk = 65;
      this.eva = 80;
      this.def = 30;
    }else {
      this.hp = 90;
      this.atk = 50;
      this.eva = 30;
      this.def = 80;
    }
  }
}

let dude = new Character();
let otherDude = new Character();
dude.class("Fighter");
otherDude.class("Rogue");
console.log(dude, otherDude);
console.table(dude);
console.table(otherDude);