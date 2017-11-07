import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
var Constants = require('./Constants/Constants');
var Actions = require('./Actions/Actions');
export default class App extends React.Component {
   constructor(props){
    super(props);

  }

  render() {


      return (
        <View style={styles.Container}>
            <View style={styles.innerContainer}>

                  <TextInput
                    style={styles.inputTextUser}
                    placeholder='Enter Username Here'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='#CAC6C5'
                  />
              </View>
            <View style={styles.usertextContainer}>

              <TextInput
                secureTextEntry = {true}
                style={styles.inputTextPwd}
                placeholder='Enter Password Here'
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor='#CAC6C5'
              />
             </View>

            <View style={styles.signInButtonContainer}>
                <View style={styles.signInTextContainer}>
                  <TouchableHighlight
                  onPress={()=>{
                    //Actions.signIn();
                    console.log("check this",this.props)
                    {/* this.props.navigator.push({
                  id: Constants.components.SEARCH.id,
                  title:Constants.components.SEARCH.title
                }); */}
                  }}
                  underlayColor='#CAC6C5' >
                      <Text style={styles.signInText}>
                      SIGN IN
                      </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      //backgroundColor:'',
      alignItems:'center',
      justifyContent:'center'
    },
    innerContainer:{
      flex:1,
      marginTop:'40%'
    },
    usertextContainer:{
        flex:1,
        marginTop:'10%'
    },
    passTextContainer:{
      marginTop:'5%'
    },
    line:{
        height: 1,
      backgroundColor:'black'
    },
    registerContainer:{
      marginTop:'2%'
    },
    switchContainer:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      height:'10%'
    },
    remTextContainer:{
      fontSize:12,
      color:'blue',
      paddingLeft:'5%'
    },
    signInButtonContainer:{
      marginTop:'2%'
    },
    signInTextContainer:{
      alignItems:'center',
      justifyContent:'center',
      height:'25%',
      borderColor:'black',
      borderRadius: 5 // suppose to be a variable, (borderRadius: '5 * $logoImageHeight')HowEver, this does not seem to work even though it is listed on the offDocs
    },
    signInText:{
      fontSize:24,
      color:'black'
    },
    registerButtonContainer:{
      height:'5%',
      marginTop:'2%',
      alignItems:'center',
      justifyContent:'center'
    },
    registerButtonText:{
      fontSize:12,
      color:'black'
    },
    inputTextUser:{
      height   :'100%',
      width: '70%',
      marginLeft: 50,
      fontSize :24,
      color    : 'black',
      borderColor: 'gray'
    },
    inputTextPwd:{
      height   :'100%',
      width: '70%',
      marginLeft: 50,
      fontSize :24,
      color    : 'black',
      borderColor: 'gray'
    },
    size : {
      height: 25,
      width: 25,
      marginTop:'2%'
    }
});
