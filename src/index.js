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
  player.name = "You";

  //generate Enemy process:
  const getCoworker = () => {
    const keys = Object.keys(coworkers);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const get = () => {
    let newCoworkerName = getCoworker();
    //create variable name as .name string property.
    let newEnemyObj = coworkers[newCoworkerName];
    newEnemyObj.name = newCoworkerName;
    updateHealthBars(player, newCoworkerName);

    let hp2 = document.getElementById("hp2");
    hp2.innerHTML = "";
    hp2.innerHTML = `<strong>${newCoworkerName}</strong>`;
    return coworkers[newCoworkerName];
  };
  let enemy = get();
  start.style.display = 'none';
  selector.style.display = 'none';

  const damage = document.getElementById("attack-button");
  damage.addEventListener("click", () => {
    damage.setAttribute("disabled", true);
    attack(player, enemy);
    updateHealthBars(player, enemy);
    if (enemy.hp > 0) {
      setTimeout(() => {
        attack(enemy, player);
        updateHealthBars(player, enemy);
        damage.removeAttribute("disabled");
      }, 400);
    }
    // attack(player, enemy);
    // updateHealthBars(player, enemy);
  });

  const backToWork = (player) => {
    const goBack = document.getElementById("goBack");
    goBack.addEventListener("click", () => {   
      player.inventory.find((item) => {
        if(item.name === "union-card"){
          if (player.money > 2) {
            player.hp += 15;
            player.money -= 2;
          } else if (player.money < 2) {
            return;
          }
        }
      });
      if (player.hp >= player.maxHp){
        player.hp = player.maxHp;
      }

      let bossFight = document.getElementById("bossFight");
      let dice = document.getElementById("attack-button");
      enemy = get();
      enemy.hp += (player.lvl * 2);
      enemy.maxHp = enemy.hp;
      let p = document.querySelector(".postFightText");
      p.textContent = "";
      dice.removeAttribute("disabled");
      shopKeep.style.display = "none";
      goBack.style.display = "none";
      bossFight.style.display = "none";
    });
  };

  const bossFight = () => {
    const fightBoss = document.getElementById("bossFight");
    fightBoss.addEventListener("click", () => {
      const goBack = document.getElementById("goBack");
      let dice = document.getElementById("attack-button");
      enemy.npcGen("Boss");
      enemy.name = "The Boss";
      let p = document.querySelector(".postFightText");
      p.textContent = "";
      dice.removeAttribute("disabled");
      shopKeep.style.display = "none";
      goBack.style.display = "none";
      fightBoss.style.display = "none";

      let canvas = document.querySelector(".canvas");
      let h2 = document.createElement("h2");
      let h1 = document.createElement("h1");
      let unneccesaryTestText = document.createElement("h2");
      let hp2 = document.getElementById("hp2");
      hp2.innerHTML = "";
      hp2.innerHTML = `<strong>The BOSS</strong>`;
      h2.textContent = `*rumblings of company-wide lay-offs*`;
      h1.textContent = `*A wild boss appears`;
      unneccesaryTestText.textContent = "Time for your Performance Evaluation!";
      canvas.append(h2);
      setTimeout(() => {
        canvas.append(h1);
      }, 800);
      setTimeout(() => {
        canvas.append(unneccesaryTestText);
      }, 3000);
    });
  };
  backToWork(player);
  bossFight();


  function updateHealthBars (player, enemy){
    let hp1 = document.getElementById(`hp1`);
    let hp2 = document.getElementById(`hp2`);
    const percentage1 = (player.hp /player.maxHp) * 100;
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

    charClass.textContent = `Class: ${player.classType}`;
    level.textContent = player.lvl;
    health.textContent = Math.round(player.hp);
    totalHealth.textContent = player.maxHp;
    attack.textContent = player.atk;
    evasion.textContent = player.eva;
    defense.textContent = player.def;

    let money = document.getElementById("money");
    money.textContent = player.money;
  }

  const buy = (player, nameOfItem, itemWithIndex) => {
    player.money -= itemWithIndex.price;
    player.getItem(itemWithIndex);
    let money = document.getElementById("money");
    money.textContent = player.money;
    let pocket = document.getElementById("pocket");
    let newItems = document.createElement("li");
    pocket.append(newItems);
    newItems.textContent = nameOfItem;
    
  };

  const shopKeep = document.getElementById("shopKeep");
  shopKeep.addEventListener("click", function(){
    populate(player);
    shopKeep.setAttribute(`disabled`, true);
    let shop = document.querySelector(".shop");
    shop.style.display = "block";
  });

  //UI shopkeep
  const shopMenu = document.querySelector(".shopMenu");
  const populate = (player) => {
    const items = shopkeep.items;

    items.forEach((item) => {
      const index = items.indexOf(item);
      // const shopItemIndex = items[index];
      const shopItemName = items[index].name;
      const shopItemPrice = items[index].price;
      const bonus = items[index].bonus;

      const div = document.createElement("div");
      div.classList.add(`itemBox`);
      shopMenu.appendChild(div);
      div.innerHTML = `
        <div class="itemGrid${index}">
          <p>${shopItemName}</p>
          <p>$${shopItemPrice}</p>
          <p>${bonus}</p>
          <div class="footer"><button class="btn btn-primary buyBtn" id="shopIndex${index}" value=${shopItemName}>Buy</button></div>
        </div>
      `;

      const buyBtn = document.getElementById(`shopIndex${index}`);
      buyBtn.addEventListener("click",  function(){
        let idWithIndex = buyBtn.value;
        if (player.money >= items[index].price) {
          buy(player, idWithIndex, items[index]);
          buyBtn.setAttribute(`disabled`, true);
          updateHealthBars (player, enemy);
        } else {
          buyBtn.innerText = "Insufficient Funds";
        }
      });
    });
    exitButton(player);
  };

  const exitButton = (player) => {
    let exit = document.createElement("button");
    exit.setAttribute("id", "exit");
    exit.setAttribute("class", "btn btn-secondary");
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
      if (player.inventory.length > 0){
        for (let i = 0; i < player.inventory.length; i++) {
          for (let j = 0; j < shopkeep.items.length; j++){
            if (shopkeep.items[j].name === player.inventory[i].name){
              shopkeep.items.splice(j, 1);
            }
          }
        }
      }

      shop.style.display = "none";
      let shopKeep = document.getElementById("shopKeep");
      shopKeep.removeAttribute("disabled");
    });
  };
});

export const displayWinModal = (defender) => {
  let canvas = document.querySelectorAll(".canvas > h2");
  canvas.forEach((e) => {
    e.remove();
  });

  let p = document.querySelector(".postFightText");
  let goBack = document.getElementById("goBack");
  let bossFight = document.getElementById("bossFight");
  let dice = document.getElementById("attack-button");
  let shopKeep = document.getElementById("shopKeep");
  let restart = document.getElementById("restart-button");
  if (defender.enemyType === "Boss") {
    restart.classList.remove("hidden");   
  }
  p.textContent = `Coworker Defeated. Go meet with HR.`;
  dice.setAttribute("disabled", true);
  shopKeep.style.display = "block";
  goBack.style.display = "block";
  bossFight.style.display = "block";
};
