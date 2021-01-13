const fs = require('fs');
const path = require('path');

exports.TallyAPI = class {
  constructor(api) {
    this.api = api;
  }

  fetchLikes() {
    const likes = fs.readFileSync(
      path.join(__dirname, './', 'likes.json'),
      'utf-8'
    );
    const parsedLikes = [...JSON.parse(likes)];
    const api = parsedLikes.find((api) => api.api === this.api);
    const apiLikes = api.likes + 1;
    parsedLikes.forEach((obj) => {
      if (obj.api === this.api) {
        obj.likes = apiLikes;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, './', 'likes.json'),
      JSON.stringify(parsedLikes)
    );
    return apiLikes;
  }
};
