import "./css/styles.css";
import Character from "./js/Character.js";
import Enemy from "./js/Enemy.js";
import { attack } from "./js/combatEngine.js";

let dude = new Character();
let otherDude = new Character();
dude.class("Fighter");
otherDude.class("Rogue");

let rat = new Enemy();
rat.npcGen("Boss' Kid");
updateHealthBars(dude, rat);

const button = document.getElementById("button");
button.addEventListener("click", () => { 
  attack(dude, rat);
  updateHealthBars(dude, rat);
  attack(rat, dude);
  updateHealthBars(dude, rat);
});

export const displayWinModal = () => {
  let canvas = document.querySelector(`.canvas`);
  let p = document.createElement("p");
  canvas.append(p);
  p.textContent = `You win.`;
};

function updateHealthBars(character, enemy) {
  let hp1 = document.getElementById(`hp1`);
  let hp2 = document.getElementById(`hp2`);
  const percentage1 = (character.hp / character.maxHp) * 100;
  const percentage2 = parseInt((enemy.hp/ enemy.maxHp) * 100);
  hp1.style.cssText = `
    background: lightblue;
    width: ${percentage1}%;
    height: 100%;
  `;
  hp2.style.cssText = `
    background: rgb(218, 83, 83);
    width: ${percentage2}%;
    height: 100%;
  `;
}