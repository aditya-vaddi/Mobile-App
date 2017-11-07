var keyMirror = require('keymirror');
// you can use a keymirror or can simply assign the value to the key.
//TOGGLE_SEARCH_BAR:null can be TOGGLE_SEARCH_BAR:'TOGGLE_SEARCH_BAR' without the the keymirror Library

module.exports = {

  components: {
    APP: {id: 'App' , title: ''},
    SEARCH: {id: 'Search' , title: 'SEARCH'},
    ACCOUNT: {id: 'Account' , title: 'ACCOUNT'},
    RIGHT_MENU_CONTENT: {id: 'RightMenuContent' , title: ''}
  },
    key_mirror: keyMirror({
      SIGN_OUT:null,
      SIGN_IN: null
    })
};
