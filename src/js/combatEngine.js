// import Character from "./js/Character.js";
// import Enemy from "./js/Enemy.js";

/*start of turn event(s);
*  -take potions
*/
//user event - attack
//ai response - attack
//end of turn event(s) - hp <= 0 ?  youWinOrLose();


const randomize = (e) => {
  let min = (Math.ceil(e));
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const attack = (attacker, defender) => {
  let attack = randomize(attacker.atk);
  let evade = randomize(defender.eva);

  if (attack > evade) {
    damage(attacker, defender);
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
  return defender.hp - remainingAtk;
};

