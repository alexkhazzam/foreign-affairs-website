exports.helpModel = class {
  constructor(searchedValue) {
    this.searchedValue = searchedValue;
  }

  matchPossibleRefs() {
    this.refs = [
      'Homepage',
      'Contact',
      'Officers & Members',
      'Sign In',
      'Log In',
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
    return {
      refs: this.matchedRefs.length === 0 ? 'success' : 'fail',
    };
  }
};
