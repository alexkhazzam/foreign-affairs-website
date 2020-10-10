exports.helpModel = class {
  constructor(searchedValue) {
    this.searchedValue = searchedValue;
  }

  matchPossibleRefs() {
    this.refs = [
      'Homepage',
      'Contact',
      'Staff',
      'Register',
      'Login',
      'Join',
      'Attendance',
      'Who',
      'Bylaws',
    ];
    this.matchedRefs = [];
    this.refs.forEach((ref) => {
      if (
        this.searchedValue.toUpperCase().includes(ref.toUpperCase()) ||
        ref.toUpperCase().includes(this.searchedValue.toUpperCase())
      ) {
        this.matchedRefs.push(ref);
      }
    });

    let string = 'co';
    const linkObj = [];
    this.refs.forEach((ref) => {
      linkObj.push({ ref: ref, chars: [...ref.split('')] });
    });
    const splitSearch = [...string.split('')];
    linkObj.forEach((link) => {
      link.chars.forEach((char) => {
        splitSearch.forEach((letter) => {
          if (char === letter) {
            console.log(link.ref);
          }
        });
      });
    });
    return this.matchedRefs;
  }
};
