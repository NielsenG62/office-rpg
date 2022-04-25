import { displayWinModal } from "./../index.js";
export {roll, attack, damage};

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
