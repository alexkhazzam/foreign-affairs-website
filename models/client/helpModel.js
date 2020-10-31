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
    const chars = [];
    for (let i = 0; i <= this.searchedValue.length; i++) {
      this.matchedRefs.forEach((ref) => {
        for (let k = 0; k <= ref.length; k++) {
          if (this.searchedValue.split('')[i] === ref.charAt(k)) {
            chars.push(ref.charAt(k));
          }
        }
      });
    }
    return { matchedRefs: this.matchedRefs, chars: chars };
  }
};
