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


const button = document.getElementById("button");
button.addEventListener("click", () => { 

  attack(dude, rat);
  attack(rat, dude);

});

export const displayWinModal = () => {
  let canvas = document.querySelector(`.canvas`);
  let p = document.createElement("p");
  canvas.append(p);
  p.textContent = `You win.`;
};
