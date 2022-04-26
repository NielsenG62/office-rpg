import Enemy from "./Enemy.js";

export {coworkers as coworkers};

let Jim = new Enemy();
let Dave = new Enemy();
let Jarod = new Enemy();
let Bill = new Enemy();
let Samantha = new Enemy();
let Jill = new Enemy();
let Britney = new Enemy();
let Charles = new Enemy();
let Gabe = new Enemy();
let Emilio = new Enemy();
let Marcus = new Enemy();
let Mike = new Enemy();
let Billy = new Enemy();
let Timmy = new Enemy();
let Jimmy = new Enemy();
let Bobby = new Enemy();

Jim.npcGen("Intern");
Dave.npcGen("Intern");
Jarod.npcGen("Intern");
Bill.npcGen("Intern");
Samantha.npcGen("Intern");
Jill.npcGen("Intern");
Britney.npcGen("Intern");

Charles.npcGen("Energy Vampire");
Gabe.npcGen("Energy Vampire");
Emilio.npcGen("Energy Vampire");
Marcus.npcGen("Energy Vampire");
Mike.npcGen("Energy Vampire");

Billy.npcGen("Boss' Kid");
Timmy.npcGen("Boss' Kid");
Jimmy.npcGen("Boss' Kid");
Bobby.npcGen("Boss' Kid");

let coworkers = {
  Jim, 
  Dave, 
  Jarod, 
  Bill, 
  Samantha, 
  Jill, 
  Britney,
  Charles,
  Gabe,
  Emilio,
  Marcus,
  Mike,
  Billy,
  Timmy,
  Jimmy,
  Bobby, 
};