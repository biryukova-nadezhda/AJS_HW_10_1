export default class Team {
  constructor() {
    this.roundTeam = new Set();
  }

  addRoundTeam(...persons) {
    persons.forEach((person) => {
      this.roundTeam.add(person);
    });
  }

  [Symbol.iterator]() {
    const arrRoundTeam = Array.from(this.roundTeam);
    let current = 0;
    const end = arrRoundTeam.length;

    return {
      next() {
        if (current < end) {
          const currentTeam = arrRoundTeam[current];
          current += 1;
          return {
            done: false,
            value: currentTeam,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}
