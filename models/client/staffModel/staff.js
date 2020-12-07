const fs = require('fs');
const path = require('path');

exports.GetMembers = class {
  static fetchMembers() {
    const members = fs.readFileSync(
      path.join(__dirname, './', 'data', 'members.json'),
      'utf-8'
    );
    return [...JSON.parse(members)];
  }
};
