var AppDispatcher = require('../Dispatcher/Dispatcher');
var Constants = require('../Constants/Constants');

var Actions = {

  signOut: function() {
    AppDispatcher.dispatch({
      actionType: Constants.key_mirror.SIGN_OUT
    });
  },

  signIn: function() {
    AppDispatcher.dispatch({
      actionType: Constants.key_mirror.SIGN_IN
    });
  }


};

module.exports = Actions;
