import { displayWinModal } from "./../index.js";
// import Character from "./Character.js";
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
      if (attacker.classType === "Fighter" || attacker.classType === "Rogue" || attacker.classType === "Tank") {
        attacker.money += 5;
        attacker.levelUp();
        console.log(attacker);
        displayWinModal();

      } else {
        console.log("you lose");
        let canvas = document.querySelector(".canvas");
        let h2 = document.createElement("h2");
        h2.textContent = "You've been laid off!";
        canvas.append(h2);
      }
    }
  } else if (evade > attack) {
    console.log("Attack missed!");
    let canvas = document.querySelector(".canvas");
    let h2 = document.createElement("h2");
    h2.textContent = "Attack missed!";
    canvas.append(h2);
  } else if (attack === evade) {
    console.log("Git Gud");
    let canvas = document.querySelector(".canvas");
    let h2 = document.createElement("h2");
    h2.textContent = "Git Gud.";
    canvas.append(h2);
  }
};

const damage = (attacker, defender) => {
  let defReduced = defender.def/100;
  let atkReduced = attacker.atk*defReduced;
  let remainingAtk = attacker.atk - atkReduced;
  return Math.round(defender.hp -= remainingAtk);
};

