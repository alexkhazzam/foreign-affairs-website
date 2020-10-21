const { match } = require('assert');
const { createPrivateKey } = require('crypto');
const fs = require('fs');
const path = require('path');

exports.SubmitCode = class {
  constructor(id) {
    this.id = id;
  }

  makeId(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
  }

  static submitId(id) {
    console.log('FHWOEHGWPHGWEHGEWGIWHEI');
    this.id = id;
    let result = false;
    if (this.id.length < 6) {
      result = false;
    }
    for (let i = 0; i <= this.id.length; i++) {
      if (this.id.charAt(i).toUpperCase() !== this.id.charAt(i)) {
        return (result = false);
      }
    }
    const ids = fs.readFileSync(`${__dirname}/data/memberCodes.json`, 'utf-8');
    const parsedIds = [...JSON.parse(ids)];
    const matchId = parsedIds.find((member) => member.id === this.id);
    if (matchId === undefined) {
      result = false;
    } else {
      const currentIds = fs.readFileSync(
        `${__dirname}/data/memberCodesSubmitted.json`,
        'utf-8'
      );
      const currentParsedIds = [...JSON.parse(currentIds)];
      currentParsedIds.push(`${matchId.member}`);
      fs.writeFileSync(
        `${__dirname}/data/memberCodesSubmitted.json`,
        JSON.stringify(currentParsedIds)
      );
      const memberNames = fs.readFileSync(
        `${__dirname}/data/memberCodesSubmitted.json`,
        'utf-8'
      );
      const parsedNames = [...JSON.parse(memberNames)];
      console.log('succcccessss');
      result = true;
    }
    return {
      result: result,
      firstName: matchId.member.split('-')[0],
      lastName: matchId.member.split('-')[1],
      id: matchId.id,
    };
  }
};
