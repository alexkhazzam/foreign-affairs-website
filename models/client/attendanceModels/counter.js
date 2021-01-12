// const fs = require('fs');
// const path = require('path');

// const list = fs.readFileSync(`${__dirname}/data/fall-2020.json`);
// const parsedList = [...JSON.parse(list)];
// const members = [];

// for (let i = 0; i < parsedList.length; i++) {
//   parsedList[i].forEach((el) => {
//     members.push(el);
//   });
// }

let memberArr = [
  'Alexander-Khazzam',
  'Jonathan-Moalemi',
  'Ethan-Kane',
  'Ilan-Rastegar',
  'Leon-Asnadi',
  'Liam-Kashinejad',
  'Zachary-Ziegler',
  'Zachary-Astrof',
  'Addison-Klebanov',
  'Dylan-Yaghoutiel',
  'Brandon-Tehrani',
  'Luke-Cronin',
  'Brian-Asnadi',
  'Brandon-Torkian',
  'Debra-Davidson',
  'Jared-Ohebshalom',
  'Michael-Chan',
  'Moshe-Saghirnejad',
  'Ryan-Rokshar',
  'Joseph-Edelman',
  'Jarett-Yousefzadeh',
  'Qining-Yang',
  'Eden-Reznik',
  'Eden-Monhian',
  'Josh-Hagani',
  'Anna-Han',
  'Gabriella-Paknoush',
  'Eden-Fouladi',
  'Maya-Glassman',
  'Jared-Kimiabash',
  'Remi-Gilardian',

  'Liam-Kashinejad',
  'Ariel-Kahen',
  'Kayla-Hannian',
  'Jonathan-Davidson',
  'Aaron-Mashieh',
  'Dylan-Yaghoutiel',
  'Brandon-Tehrani',
  'Andrew-Suh',
  'Debra-Davidson',
  'Tyler-Zargari',
  'Joshua-Hagani',
  'Coby-Kalimian',
  'Jacob-Malekan',
  'Brandon-Nabavian',
  'Aidan-Bassaly',
  'Brian-Asnadi',
  'Brayden-Dilmanian',
  'Ben-Sweberg',
  'Ariel-Baron',
  'Coby-Rastegar',
  'Daniel-Hasedian',
  'Joseph-Edelman',
  'Ariel-Kahen',
  'Moshe-Saghirnejad',
  'Ryan-Rokshar',
  'Reyna-Kim',
  'Ross-Hakimian',
  'Alexander-Khazzam',
  'Ben-Rubin',
  'Josh-Isakharov',
  'William-Wu',
  'Alexander-Victory',
  'Bianca-Lee',
  'Aaron-Nasiri',
  'Aaron-Malekan',
  'Joseph-Kahen',
  'Leon-Asnadi',
  'Jonathan-Moalemi',
  'Ilan-Rastegar',
  'Ethan-Kane',
  'Gabriella-Paknoush',
  'Remi-Gilardian',
  'Jared-Ohebshalom',
  'Natasha-Khazzam',

  'Alexander-Khazzam',
  'Jonathan-Moalemi',
  'Ethan-Kane',
  'Leon-Asnadi',
  'Ilan-Rastegar',
  'Natasha-Khazzam',
  'Liam-Kashinejad',
  'Brian-Asnadi',
  'Eden-Reznik',
  'Zachary-Ziegler',
  'Debra-Davidson',
  'Eden-Fouladi',
  'Jarett-Yousefzadeh',
  'Ethan-Makhany',
  'Natasha-Khazzam',
  'Brandon-Torkian',
  'Ethan-Dayani',
  'Joseph-Edelman',
  'Elena-Esken',
  'Dylan-Yaghoutiel',
  'Jonah-Nouriyelian',
  'Kalyn-Jones',
  'Alexander-Taberoki',
  'Jared-Ohebshalom',
  'Gabriella-Paknoush',
  'Remi-Gilardian',

  'Alexander-Khazzam',
  'Ethan-Kane',
  'Jonathan-Moalemi',
  'Ilan-Rastegar',
  'Leon-Asnadi',
  'Dylan-Yaghoutiel',
  'Liam-Kashinejad',
  'Joshua-Ostad',
  'Jonah-Nouriyelian',
  'Zachary-Ziegler',
  'Zachary-Levine',
  'Brian-Asnadi',
  'Jared-Ohebshalom',
  'Jonah-Fishman',
  'Brandon-Torkian',
  'Andrew-Suh',
  'Isaac-Shemooilian',
  'Brandon-Tehrani',
  'Elon-Litman',
  'Natasha-Khazzam',
  'Qining-Yang',
  'Moshe-Saghirnejad',
  'Jarett-Yousefzadeh',
  'Benjamin-Ghassabian',
  'Zachary-Astrof',
  'Michael-Ghodsi',
  'Joseph-Edelman',
  'David-Ludwig',

  'Alexander-Khazzam',
  'Natasha-Khazzam',
  'Ethan-Kane',
  'Ilan-Rastegar',
  'Leon-Asnadi',
  'Jonathan-Moalemi',
  'Jacob-Shirazi',
  'Ethan-Dayani',
  'Addison-Klebanov',
  'Alexander-Taberoki',
  'Alice-Yang',
  'Andrew-Suh',
  'Brandon-Torkian',
  'Brandon-Tehrani',
  'Brian-Asnadi',
  'Chloe-Zhou',
  'David-Ludwig',
  'Dylan-Yaghoutiel',
  'Jared-Kimiabash',
  'Jarett-Yousefzadeh',
  'Jinchen-Yang',
  'Jonah-Nouriyelian',
  'Joseph-Edelman',
  'Joseph-Kahan',
  'Kalyn-Jones',
  'Leo-Korman',
  'Liam-Kashinejad',
  'Michael-Ghodsi',
  'Moshe-Saghirnejad',
  'Nathan-Rabizadeh',
  'Rachel-Levy',
  'Reyna-Kim',
  'Ryan-Rokshar',
  'Sophie-Frankel',
  'Zachary-Levine',
  'Zachary-Zeiglar',

  'Alexander-Khazzam',
  'Natasha-Khazzam',
  'Ilan-Rastegar',
  'Ethan-Kane',
  'Jonathan-Moalemi',
  'Leon-Asnadi',
  'Brandon-Torkian',
  'Addison-Klebanov',
  'Alexander-Taberoki',
  'Andrew-Suh',
  'Brandon-Tehrani',
  'Brian-Asnadi',
  'David-Ludwig',
  'Debra-Davidson',
  'Dylan-Yaghoutiel',
  'Ethan-Dayani',
  'Isaac-Shemooilian',
  'Jarett-Yousefzadeh',
  'Jonah-Nouriyelian',
  'Joseph-Edelman',
  'Liam-Kashinejad',
  'Michael-Ghodsi',
  'Nathan-Rabizadeh',
  'Sophie-Mirro',
  'William-Wu',
  'Zachary-Astrof',
  'Zachary-Levine',
  'Zachary-Ziegler',

  'Alexander-Khazzam',
  'Jared-Ohebshalom',
  'Ethan-Kane',
  'Ilan-Rastegar',
  'Natasha-Khazzam',
  'Jonathan-Moalemi',
  'Leon-Asnadi',
  'Gabriella-Paknoush',
  'Remi-Gilardian',
  'Addison-Klebanov',
  'Alice-Yang',
  'Brandon-Torkian',
  'Brian-Asnadi',
  'David-Ludwig',
  'Debra-Davidson',
  'Dylan-Yaghoutiel',
  'Eden-Reznik',
  'Ethan-Dayani',
  'Isaac-Shemooilian',
  'Jinchen-Yang',
  'Joseph-Edelman',
  'Kalyn-Jones',
  'Liam-Kashinejad',
  'Liam-Klebanov',
  'Moshe-Saghirnejad',
  'Ryan-Rokshar',
  'Zachary-Levine',
  'Zachary-Astrof',
  'Zachary-Ziegler',

  'Moshe-Gavriel',
  'Zachary-Ziegler',
  'Jared-Ohebshalom',
  'Dylan-Yaghoutiel',
  'Liam-Kashinejad',
  'Joshua-Ostad',
  'Jonah-Nouriyelian',
  'Zachary-Levine',
  'Brian-Asnadi',
  'Jonah-Fishman',
  'Brandon-Torkian',
  'Kalyn-Jones',
  'Andrew-Suh',
  'Isaac-Shemooilian',
  'Brandon-Tehrani',
  'Elon-Litman',
  'Ethan-Dayani',
  'Natasha-Khazzam',
  'Qining-Yang',
  'Alexander-Khazzam',
  'Ilan-Rastegar',
  'Ethan-Kane',
  'Jonathan-Moalemi',
  'Moshe-Saghirnejad',
  'Jarett-Yousefzadeh',
  'Benjamin-Ghassabian',
  'Zachary-Astrof',
  'Michael-Ghodsi',
  'Joseph-Edelman',
  'David-Ludwig',

  'Alexander-Khazzam',
  'Leon-Asnadi',
  'Jonathan-Moalemi',
  'Ethan-Kane',
  'Ilan-Rastegar',
  'Addison-Klebanov',
  'Adin-Salim',
  'Alexander-Taberoki',
  'Qining-Yang',
  'Andrew-Suh',
  'Benjamin-Ghassabian',
  'Brandon-Torkian',
  'Brian-Amaya',
  'Brian-Asnadi',
  'Dean-Ebrahimzadeh',
  'Debra-Davidson',
  'Dylan-Yaghoutiel',
  'Ethan-Dayani',
  'Isaac-Shemooilian',
  'Jacob-Adhoot',
  'Jared-Kimiabash',
  'Jared-Ohebshalom',
  'Jarett-Yousefzadeh',
  'Jinchen-Yang',
  'Jonah-Nouriyelian',
  'Joseph-Edelman',
  'Josh-Isakharov',
  'Kalyn-Jones',
  'Leo-Korman',
  'Liam-Klebanov',
  'Moshe-Saghirnejad',
  'Natasha-Khazzam',
  'Nathan-Rabizadeh',
  'Talia-Nazarian',
  'Talia-Pearlman',
  'William-Wu',
  'Zachary-Levine',
  'Zachary-Astrof',
  'Zachary-Ziegler',

  'Dylan-Yaghoutiel',
  'Liam-Kashinejad',
  'Joshua-Ostad',
  'Jonah-Nouriyelian',
  'Zachary-Ziegler',
  'Jared-Ohebshalom',
  'Zachary-Levine',
  'Leon-Asnadi',
  'Brian-Asnadi',
  'Jonathan-Moalemi',
  'Ilan-Rastegar',
  'Ethan-Kane',
  'Jonah-Fishman',
  'Brandon-Torkian',
  'Kalyn-Jones',
  'Andrew-Suh',
  'Isaac-Shemooilian',
  'Brandon-Tehrani',
  'Elon-Litman',
  'Ethan-Dayani',
  'Natasha-Khazzam',
  'Qining-Yang',
  'Moshe-Saghirnejad',
  'Benjamin-Ghassabian',
  'Zachary-Astrof',
  'Michael-Ghodsi',
  'David-Ludwig',

  'Alexander-Khazzam',
  'Isaac-Shemooilian',
  'Addison-Klebanov',
  'Andrew-Suh',
  'Avi-Haiimpour',
  'Benjamin-Ghassabian',
  'Brandon-Tehrani',
  'Brandon-Torkian',
  'Brian-Asnadi',
  'Can-Kara',
  'Dean-Ebrahimzadeh',
  'Debra-Davidson',
  'Dylan-Yaghoutiel',
  'Ethan-Dayani',
  'Ethan-Kane',
  'Gregory-Olkhovetsky',
  'Ivan-Zheng',
  'Jacob-Adhoot',
  'Jared-Kimiabash',
  'Jared-Ohebshalom',
  'Jarett-Yousefzadeh',
  'Jonah-Fishman',
  'Jonah-Nouriyelian',
  'Jonathan-Moalemi',
  'Joseph-Edelman',
  'Joshua-Richards',
  'Julian-Hakimian',
  'Kalyn-Jones',
  'Leo-Korman',
  'Natasha-Khazzam',
  'Leon-Asnadi',
  'Liam-Kashinejad',
  'Liam-Klebanov',
  'Ilan-Rastegar',
  'Michael-Ghodsi',
  'Michael-Ishal',
  'Moshe-Saghirnejad',
  'Leon-Asnadi',
  'Zachary-Levine',
  'Zachary-Ziegler',
  'Zachary-Astrof',
  'Alexander-Khazzam',
  'Jonathan-Moalemi',
  'Leon-Asnadi',
  'Ilan-Rastegar',
  'Ethan-Kane',
  'Jared-Ohebshalom',
  'Addison-Klebanov',
  'Adin-Salim',
  'Kalyn-Jones',
  'Alexander-Taberoki',
  'Benjamin-Ghassabian',
  'Brandon-Tehrani',
  'Brandon-Torkian',
  'Debra-Davidson',
  'Dylan-Yaghoutiel',
  'Isaac-Shemooilian',
  'Jacob-Adhoot',
  'Jamie-Khezri',
  'Jarett-Yousefzadeh',
  'Jonah-Fishman',
  'Jonah-Nouriyelian',
  'Joseph-Edelman',
  'Leo-Korman',
  'Liam-Klebanov',
  'Michael-Ghodsi',
  'Moshe-Saghirnejad',
  'Ryan-Rokshar',
];

memberArr.forEach((el) => {
  if (el === 'Zachary-Zieglar') {
    console.log(4);
  }
});

function pitoAlgorithm() {
  let set = new Set(memberArr);
  for (let val of set) {
    let totalCount = 0;
    for (let i = 0; i < memberArr.length; i++) {
      if (val === memberArr[i]) {
        totalCount++;
      }
    }
    console.log(val, ':', totalCount);
  }
  return {};
}

pitoAlgorithm();

// Alexander-Khazzam : 11
// Jonathan-Moalemi : 12
// Ethan-Kane : 12
// Ilan-Rastegar : 12
// Leon-Asnadi : 12
// Liam-Kashinejad : 10
// Zachary-Ziegler : 9
// Zachary-Astrof : 8
// Addison-Klebanov : 7
// Dylan-Yaghoutiel : 12
// Brandon-Tehrani : 9
// Luke-Cronin : 1
// Brian-Asnadi : 11
// Brandon-Torkian : 11
// Debra-Davidson : 8
// Jared-Ohebshalom : 10
// Michael-Chan : 1
// Moshe-Saghirnejad : 10
// Ryan-Rokshar : 5
// Joseph-Edelman : 11
// Jarett-Yousefzadeh : 9
// Qining-Yang : 5
// Eden-Reznik : 3
// Eden-Monhian : 1
// Josh-Hagani : 1
// Anna-Han : 1
// Gabriella-Paknoush : 4
// Eden-Fouladi : 2
// Maya-Glassman : 1
// Jared-Kimiabash : 4
// Remi-Gilardian : 4
// Ariel-Kahen : 2
// Kayla-Hannian : 1
// Jonathan-Davidson : 1
// Aaron-Mashieh : 1
// Andrew-Suh : 8
// Tyler-Zargari : 1
// Joshua-Hagani : 1
// Coby-Kalimian : 1
// Jacob-Malekan : 1
// Brandon-Nabavian : 1
// Aidan-Bassaly : 1
// Brayden-Dilmanian : 1
// Ben-Sweberg : 1
// Ariel-Baron : 1
// Coby-Rastegar : 1
// Daniel-Hasedian : 1
// Reyna-Kim : 2
// Ross-Hakimian : 1
// Ben-Rubin : 1
// Josh-Isakharov : 2
// William-Wu : 3
// Alexander-Victory : 1
// Bianca-Lee : 1
// Aaron-Nasiri : 1
// Aaron-Malekan : 1
// Joseph-Kahen : 1
// Natasha-Khazzam : 11
// Ethan-Makhany : 1
// Ethan-Dayani : 8
// Elena-Esken : 1
// Jonah-Nouriyelian : 9
// Kalyn-Jones : 8
// Alexander-Taberoki : 5
// Joshua-Ostad : 3
// Zachary-Levine : 8
// Jonah-Fishman : 5
// Isaac-Shemooilian : 8
// Elon-Litman : 3
// Benjamin-Ghassabian : 6
// Michael-Ghodsi : 7
// David-Ludwig : 6
// Jacob-Shirazi : 1
// Alice-Yang : 2
// Chloe-Zhou : 1
// Jinchen-Yang : 3
// Joseph-Kahan : 1
// Leo-Korman : 4
// Nathan-Rabizadeh : 3
// Rachel-Levy : 1
// Sophie-Frankel : 1
// Zachary-Zeiglar : 1
// Sophie-Mirro : 1
// Liam-Klebanov : 4
// Moshe-Gavriel : 1
// Adin-Salim : 2
// Brian-Amaya : 1
// Dean-Ebrahimzadeh : 2
// Jacob-Adhoot : 3
// Talia-Nazarian : 1
// Talia-Pearlman : 1
// Avi-Haiimpour : 1
// Can-Kara : 1
// Gregory-Olkhovetsky : 1
// Ivan-Zheng : 1
// Joshua-Richards : 1
// Julian-Hakimian : 1
// Michael-Ishal : 1
// Jamie-Khezri : 1
