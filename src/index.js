import "./css/styles.css";
import Character from "./js/Character.js";
import Enemy from "./js/Enemy.js";

let dude = new Character();
let otherDude = new Character();
dude.class("Fighter");
otherDude.class("Rogue");

let rat = new Enemy();
rat.npcGen("Boss' Kid");

//tests
console.log(dude, otherDude, rat);
dude.hp -= 10;
dude.levelUp();
otherDude.levelUp();
console.log(`after lvl up`, dude, otherDude);