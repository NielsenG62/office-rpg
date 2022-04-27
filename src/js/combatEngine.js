import { displayWinModal } from "./../index.js";
import Character from "./Character.js";
export {roll, attack, damage, drink};


const roll = (e) => {
  let min = (Math.ceil(e));
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const attack = (attacker, defender) => {
  let attack = roll(attacker.atk);
  let evade = roll(defender.eva);
  console.log(attack, evade);
  
  if (attack > evade) {
    damage(attacker, defender);
    if (defender.hp <= 0){
      attacker.money += 5;
      console.log(attacker);
      displayWinModal();
    }
  } else if (evade > attack) {
    console.log("Attack missed!");
  } else if (attack === evade) {
    console.log("Git Gud");
  }
};

const damage = (attacker, defender) => {
  let defReduced = defender.def/100;
  let atkReduced = attacker.atk*defReduced;
  let remainingAtk = attacker.atk - atkReduced;
  return defender.hp -= remainingAtk;
};

const drink = (character, drink) => {
  if (drink === "latte") {
    character.hp += 30;
    removeDrink(drink);
  } else if (drink === "mocha") {
    character.hp += 50;
    removeDrink(drink);
  } else if (drink === "espresso") {
    character.hp += 70;
    removeDrink(drink);
  } else {
    console.log("Invalid drink type");
  }
};

const removeDrink = (drink) => {
  let index = Character.inventory.findIndex(obj => {
    return obj.name === drink;
  });
  console.log(index);
  Character.inventory.splice(index, 1);
};
