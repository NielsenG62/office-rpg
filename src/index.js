import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Character from "./js/Character.js";
// import Enemy from "./js/Enemy.js";
import { attack } from "./js/combatEngine.js";
import {shopkeep} from "./js/shopKeep.js";
import {coworkers} from "./js/coworkers.js";

const start = document.getElementById("start");
start.addEventListener("click", () => {
  let player = new Character();
  let selector = document.getElementById("selector");
  let characterClass = selector.options[selector.selectedIndex].value;
  player.class(characterClass);
  let enemy;

  //generate Enemy process:
  const getCoworker = () => {
    const keys = Object.keys(coworkers);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const get = () => {
    let name = getCoworker();
    console.log(name, coworkers[name]);
    return coworkers[name];
  };

  let enemyClass = get();
  // enemy.npcGen(enemyClass);
  updateHealthBars(player, enemyClass);


  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log(enemy, enemyClass);
    attack(player, enemyClass);
    updateHealthBars(player, enemyClass);
    attack(enemyClass, player);
    updateHealthBars(player, enemyClass);
  });

  const backToWork = () => {
    const goBack = document.getElementById("goBack");
    goBack.addEventListener("click", () => {
      let bossFight = document.getElementById("bossFight");
      let dice = document.getElementById("button");
      enemy = get();
      let p = document.querySelector(".postFightText");
      p.textContent = "";
      dice.removeAttribute("disabled");
      shopKeep.style.display = "none";
      goBack.style.display = "none";
      bossFight.style.display = "none";
    });
  };
  backToWork();


  function updateHealthBars (character, enemy){
    let hp1 = document.getElementById(`hp1`);
    let hp2 = document.getElementById(`hp2`);
    const percentage1 = (character.hp /character.maxHp) * 100;
    const percentage2 = (enemy.hp/enemy.maxHp) * 100;
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

    let charClass = document.getElementById("class");
    let level = document.getElementById(`level`);
    let health = document.getElementById("health");
    let totalHealth = document.getElementById("total-health");
    let attack = document.getElementById("attack");
    let evasion = document.getElementById("evasion");
    let defense = document.getElementById("defense");

    charClass.textContent = `Class: ${character.classType}`;
    level.textContent = character.lvl;
    health.textContent = character.hp;
    totalHealth.textContent = character.maxHp;
    attack.textContent = character.atk;
    evasion.textContent = character.eva;
    defense.textContent = character.def;

    let pocket = document.getElementById("pocket");
    character.inventory.forEach((e) => {
      pocket.innerHTML = `
      <li>${e}</li>;
    `;
    });
  }

  const buy = (character, item) => {
    character.money -= item.price;
    character.getItem(item);
    let index = shopkeep.items.findIndex(obj => {
      return obj.name === item;
    });
    console.log(index);
    shopkeep.items.splice(index, 1);
    console.log(character, shopkeep);
     
    
    /*
    shopkeep.items.indexOf checks "espresso" or "union card" === [{},{},{}]
    {name: "espresso"}
    */
    
  };

  const shopKeep = document.getElementById("shopKeep");
  shopKeep.addEventListener("click", function(){
    // buy(dude, shopkeep.items[1])
    console.log("clicked");
    populate(player);
    shopKeep.setAttribute(`disabled`, true);
    let shop = document.querySelector(".shop");
    shop.style.display = "block";
  });

  //UI shopkeep
  const shopMenu = document.querySelector(".shopMenu");
  const populate = (character) => {
    let items = shopkeep.items;
    items.forEach((item) => {
      const index = shopkeep.items.indexOf(item);
      const shopItem = shopkeep.items[index].name;
      const div = document.createElement("div");
      div.classList.add(`itemBox`);
      shopMenu.appendChild(div);
      div.innerHTML = `
        <div class="itemGrid">
          <img src="${items[index].img}" alt="${items[index].name}">
          <p>${items[index].name}</p>
          <p>$${items[index].price}</p>
          <div class="footer"><button class="btn btn-primary buyBtn" id="shopIndex${index}" value=${shopItem}>Buy</button></div>
        </div>
      `;
      const buyBtn = document.getElementById(`shopIndex${index}`);
      buyBtn.addEventListener("click",  function(){
        let itemIndex = buyBtn.value;
        console.log("clicked", itemIndex);
        if (character.money >= itemIndex.price) {
          buy(character, itemIndex);
          buyBtn.setAttribute(`disabled`, true);
        } else {
          console.log("insufficient funds");
        }
      });
    });
    exitButton();
  };

  const exitButton = () => {
    let exit = document.createElement("button");
    exit.setAttribute("id", "exit");
    exit.textContent = "Exit Shop";
    let shop = document.querySelector(".shop");
    shop.appendChild(exit);
    let doneShopping = document.getElementById("exit");
    doneShopping.addEventListener("click", function(){
      let shopMenu = document.querySelector(".shopMenu");
      let itemBoxes = document.querySelectorAll(".itemBox");
      if (shopMenu.hasChildNodes()){
        itemBoxes.forEach(function(e){
          e.remove();
        });
        exit.remove();
      }
      shop.style.display = "none";
      let shopKeep = document.getElementById("shopKeep");
      shopKeep.removeAttribute("disabled");
    });
  };
});

export const displayWinModal = () => {
  let p = document.querySelector(".postFightText");
  let goBack = document.getElementById("goBack");
  let bossFight = document.getElementById("bossFight");
  let dice = document.getElementById("button");
  let shopKeep = document.getElementById("shopKeep");
  p.textContent = `You win.`;
  dice.setAttribute("disabled", true);
  shopKeep.style.display = "block";
  goBack.style.display = "block";
  bossFight.style.display = "block";
};
