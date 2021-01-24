const path = require('path');
const fs = require('fs');

exports.fullAttendanceModel = class {
  constructor() {
    this.fall2019 = [
      ...JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            './',
            'attendanceModels',
            'data',
            'fall-2019.json'
          ),
          'utf-8'
        )
      ),
    ];

    this.fall2020 = [
      ...JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            './',
            'attendanceModels',
            'data',
            'fall-2020.json'
          ),
          'utf-8'
        )
      ),
    ];

    this.spring2020 = [
      ...JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            './',
            'attendanceModels',
            'data',
            'spring-2020.json'
          ),
          'utf-8'
        )
      ),
    ];
  }

  organize() {
    const allMembers = [
      ...this.fall2019.concat(this.spring2020).concat(this.fall2020),
    ].sort();
    this.individualMembers = [];

    this.organizedFall2019 = this.sort(this.fall2019);
    this.organizedSpring2020 = this.sort(this.spring2020);
    this.organizedfall2020 = this.sort(this.fall2020);

    allMembers.forEach((a) => {
      a.forEach((m) => {
        this.individualMembers.push(m);
      });
    });
  }

  sort(ma) {
    const newArr = [];
    const mainArr = [];
    ma.forEach((arr) => {
      arr.forEach((m) => {
        mainArr.push(m);
      });
    });
    const set = new Set(mainArr);
    for (let v of set) {
      let tc = 0;
      for (let i = 0; i < mainArr.length; i++) {
        if (v === mainArr[i]) {
          tc++;
        }
      }
      newArr.push({ member: v, meetings: tc });
    }
    return newArr;
  }

  returnAtt() {
    this.organize();
    return {
      allIndividualMembers: [
        ...new Set(this.individualMembers.map((p) => p)),
      ].sort(),
      fall2019Attendance: this.organizedFall2019,
      spring2020Attendance: this.organizedSpring2020,
      fall2020Attendance: this.organizedfall2020,
    };
  }
};
