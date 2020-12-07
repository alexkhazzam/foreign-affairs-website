const fetchSpeaker = require('../../models/client/speakerTrip/speakerModel');

let speakerObj;
let searched;

exports.getHomePage = (req, res, next) => {
  const speakerData = new fetchSpeaker.FetchSpeaker('');
  const data = speakerData.render();
  speakerObj = [...data.allSpeakers];
  res.render('client/speakers-trips/home', {
    speakerFound:
      req.query.speakerFound === 'success' ? speakerObj : speakerObj,
    inputted: searched,
    speakers: speakerObj,
  });
};

exports.postSpeakerPage = (req, res, next) => {
  posted = true;
  const speakerData = new fetchSpeaker.FetchSpeaker(req.body.speaker);
  searched = req.body.speaker;
  const data = speakerData.render();
  if (data.speaker.length === 0) {
    speakerObj = [...data.speaker];
    res.redirect('/speakers-trips/?speakerFound=success');
  } else {
    speakerObj = [...data.allSpeakers];
    res.redirect('/speakers-trips/?speakerFound=fail');
  }
};

exports.getTripPage = (req, res, next) => {
  res.render('client/speakers-trips/trips', {});
};
