import { displayWinModal } from "./../index.js";
// import Character from "./Character.js";
export {roll, attack};


const roll = (e) => {
  let min = (Math.ceil(e));
  let max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const attack = (attacker, defender) => {
  let attack = roll(attacker.atk);
  let evade = roll(defender.eva);
  let attackBtn = document.getElementById("attack-button");
  let restartBtn = document.getElementById("restart-button");
  let remainingAtk;
  
  const damage = (attacker, defender) => {
    let defReduced = defender.def/100;
    let atkReduced = attacker.atk*defReduced;
    remainingAtk =  Math.round(attacker.atk - atkReduced);
    return Math.round(defender.hp -= remainingAtk);
  };

  if (attack > evade) {
    damage(attacker, defender);
    let canvas = document.querySelector(".canvas");
    let h2 = document.createElement("h2");
    h2.textContent = `${attacker.name} hit ${defender.name} for ${remainingAtk} damage!`;
  
    canvas.append(h2);  
    if (defender.hp <= 0){
      if (attacker.classType === "Fighter" || attacker.classType === "Rogue" || attacker.classType === "Tank") {
        attacker.money += 5;
        attacker.levelUp();
        displayWinModal(defender);
      } else {
        let canvas = document.querySelector(".canvas");
        
        while (canvas.hasChildNodes()) {
          canvas.removeChild(canvas.firstChild);
        }
        let h2 = document.createElement("h2");
        h2.textContent = "You've been laid off!";
        canvas.append(h2);
        attackBtn.setAttribute("disabled", true);
        restartBtn.classList.remove("hidden");
      }
    }
  } else if (evade > attack) {
    let canvas = document.querySelector(".canvas");
    let h2 = document.createElement("h2");
    h2.textContent = `${attacker.name} missed!`;
    canvas.append(h2);
  } else if (attack === evade) {
    let canvas = document.querySelector(".canvas");
    let h2 = document.createElement("h2");
    h2.textContent = "Git Gud.";
    canvas.append(h2);
  }
};



