import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
var searchImage = require('./Images/search.png');
export default class Search extends React.Component {
  render() {
      return (
        <View style={styles.searchView}>
          <View style={styles.searchBarView}>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                onChangeText={}
                onSubmitEditing ={() => {

                 }}
                placeholder="Search"
                value={}
              />
            </View>
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={()=> {

                }}
                underlayColor='#eeeeee'
              >
              <Image source={searchImage} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.emptySpace}/>
          <View style={styles.searchResultsContainer}>
            <View style={styles.listItem }>
                            <View style={{flex: 4}}>
                                <TouchableOpacity onPress={()=> {

                                }}>
                                    <View style={styles.clickableView}>
                                            <Text >
                                            Sample text
                                            </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  searchResultsContainer:{
    flex: 1
  },
  searchView: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchBarView: {
    height: '7%',
    //backgroundColor:'$screens.search.colors.searchBarView',
    marginTop:'2%',
    marginLeft:'3%',
    marginRight:'3%',
    marginBottom: '2%',
    //borderColor:'$screens.search.colors.searchBarViewBorder',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  emptySpace:{
    height:1,
    //backgroundColor:'$screens.search.colors.emptySpace'
  },
  iconView: {
    flex:1
  },
  textInput: {
    height: '7%',
    marginLeft: '2%',
    fontSize :20
  },
  textInputView: {
    flex: 5
  },
  spinnerview: {
    flex:1,
    width:width,
    height: height,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.25)',//'$screens.detailView.colors.camerastatusview',
    marginTop: '-62%'
  },
  listItem: {
  flexDirection: 'row',
  height: '10%',
  alignItems:'center'
},
clickableView: {
  flexDirection: 'row',
  alignItems: 'center'
},
});
