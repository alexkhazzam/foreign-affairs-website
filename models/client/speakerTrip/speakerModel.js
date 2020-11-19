const fs = require('fs');
const path = require('path');

exports.FetchSpeaker = class {
  constructor(speaker) {
    this.speaker = speaker;
  }

  render() {
    const speakerArr = fs.readFileSync(
      path.join(__dirname, './', 'data', 'speakerData.json'),
      'utf-8'
    );
    const speakers = [];
    const parsedSpeakerArr = [...JSON.parse(speakerArr)];
    parsedSpeakerArr.forEach((guest) => {
      if (guest.speaker.toUpperCase().includes(this.speaker.toUpperCase())) {
        speakers.push(guest);
      }
    });
    return {
      speaker: speakers,
      allSpeakers: parsedSpeakerArr,
    };
  }
};
