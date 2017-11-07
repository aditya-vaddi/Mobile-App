import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  InteractionManager
} from 'react-native';

var Actions          = require('./Actions/Actions');
// Login
var App            = require('./App');

// Common folder Components
var Constants        = require('./Constants/Constants');
var Routes           = require('./Constants/Routes');

// flux
var Search          = require('./Search');

class Navigation extends Component {
 constructor(props){
    super(props);
    this.state={
      navBar: false
    };
  }

  renderScene(route, navigator) {
//console.log("navigator", navigator);
debugger;
    var routeId = route.id;
     switch(routeId) {
      case Constants.components.APP.id:
        return (<App {...route.passProps} navigator={navigator} Hello={Hello}/>);
        break;
      case Constants.components.SEARCH.id:
        return (<Search {...route.passProps}  navigator={navigator}/>);
        break;
      default: ;
    }
 }

//  _navigationBar() {
//  if(this.state.navBar==true){
//   return(
//    <Navigator.NavigationBar style={styles.navigationBar}
//     routeMapper={Navigation.NavigationBarRouteMapper(this)}/>
//   );
//  }
//  else{
//   return(
//    <View/>
//   );
//  }
// }


 render() {

  return(
      this.drawer(LeftMenu,
        <Navigator
          ref='navigator'
          configureScene={() => ({
            ...Navigator.SceneConfigs.FloatFromRight, // more SceneConfigs: https://facebook.github.io/react-native/docs/navigator.html
            gestures: {} // drawer gestures and Navigation gestures are conflicting, this will make sure the navigation gesture are disabled
          })}
          //navigationBar={this._navigationBar()}
          style={{flex:1}}
          initialRoute={{id: Constants.components.APP.id, component:App}}
          renderScene={(route, nav) =>{return this.renderScene(route, nav);}}
        />
      ) // drawer function for LeftMenu end
  ); // return statement end
 } // render function end
} // Navigation class end

module.exports= Navigation;
