import Team from './team.js';

const person1 = {
  name: 'Чародей',
  type: 'Sorcerer',
  health: 80,
  level: 3,
  attack: 120,
  defence: 25,
};

const person2 = {
  name: 'Копьеносец',
  type: 'Spearman',
  health: 65,
  level: 2,
  attack: 30,
  defence: 20,
};

const person3 = {
  name: 'Пехотинец',
  type: 'Infantryman',
  health: 50,
  level: 1,
  attack: 15,
  defence: 10,
};

const newTeam = new Team();
newTeam.addRoundTeam(person1, person2, person3);

for (const person of newTeam) {
  console.log(person);
}
