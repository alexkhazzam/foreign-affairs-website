exports.TwentyNineteen = class {
  constructor() {}

  static getAttendance(meeting) {
    this.meetings = [
      [
        'members/Abby-Levy',
        'members/Alex-Khazzam',
        'members/Brandon-Maher',
        'members/Cheong-Jun',
        'members/Ethan-Kane',
        'members/Jonathan-Moalemi',
        'members/Kalyn-Jones',
        'members/Leon-Asnadi',
        'members/Luke-Cronin',
        'members/Michael-Chan',
        'members/Parker-Cohen',
        'members/Zachary-Astrof',
        'members/Zachary-Levine',
        'members/Zachary-Zieglar',
      ],
    ];
    const people = [...this.meetings[meeting]].map((member) => {
      const memberStr = `${member.split('/')[1].split('-')[0]} ${
        member.split('/')[1].split('-')[1]
      }`;
      return memberStr;
    });
    return people;
  }
};
