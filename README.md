# Working 9 to 5: An Office-Worker's RPG.
#### First group project at Epicodus by _**Mike Wright, Emilio Gonzales, Gabe Nielsen, & Marcus Lorenzo**_

---
| **_Overview_:** |
|---|

A simple turn-based text RPG which builds you up in the corporate rat race.

#### Technologies Used:
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) 
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
---


| **_Description_:** |
|---|

Originally pitched to be a combination of an office-themed rpg and a D&D 5e companion, it grew into a choose-your-own-adventure style game. A random NPC enemy is generated upon start, We used 100% vanilla Javascript, using modern ES conventions to the best of our ability.

---

| **_Setup & Installation_:** |
|---|
#### :warning: **Please make sure** that in order to run the project correctly:
##### 	:exclamation: Once you've received this repo on your computer:
- Install the node_modules directory (node: `npm install` or yarn: `yarn install`).
- Bundle the code, and run the program via server. (node: `npm run start` or yarn: `yarn run start`).

####   (More detailed instructions provided below.)

|   via CLI   |  via Download  |
|---|---|
| Download install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac) | Simply download the ZIP via the green "Code" button to right of the "Add file" button at the main repo page. 
 Open Git Bash or Terminal and type: `cd desktop` | Go to your zip file and extract to desired location on computer. 
 Next, clone `https://github.com/marcusanthonylorenzo/office-rpg` | Go to specified extraction folder, and open index.html in your broswer. 
 Once completed, open this new directory in your text editor | 
 In the CLI, install node_modules directory via `npm install` or `yarn install`, then bundle and start local server via `npm run start` or `yarn run start` to run project. |


#### Running Tests:
- To view tests via Jest, in your CLI type `npm run test`.

#### Known Bugs:
* Staggered combat to fix attack commentary.
* Scale enemy stats, boss stats.
* add images for menu.
* balance stats

---

| **_Design Plan_ (Specs):** |
|---|

#### Objects:
- Character Class
- Enemy Class
- Random NPC "Coworkers"
- Items

#### Collections/Groupings:
- Array of objects for Character.inventory.
- Array of objects for shopKeep.items.

#### Behaviours/Interactivity:
- A dice roll randomizer.
- Turn-based Attack and Hp updates.
- A shop item turn with a Boss Fight option.
- Character-class options.
- Random NPC generator

---
| **_License_:** |
|---|

[MIT]()

Copyright (c) 2022 _Marcus Lorenzo_


#### Thanks for viewing!
