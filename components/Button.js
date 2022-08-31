import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';

const Button = ({country, updateVisited}) => {
    const isCountryVisited = () => {
    if(country.visited) {
      return {color: '#ff8f01' };
    }
    else {
      return {color: '#b4b4b4' }
    }
  };
  if(country.visited){
    return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor= '#b4b4b4'
        style={styles.buttonVisited}
        onPress={() => updateVisited(country.name)}
        >
        <Text style={styles.submit}>
          ✓
        </Text>
      </TouchableHighlight>
    </View>
  );
  }
  else{
    return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor= '#b4b4b4'
        style={styles.buttonNotVisited}
        onPress={() => updateVisited(country.name)}
        >
        <Text style={styles.submit}>
          {country.visited===false ? '': ''} 
        </Text>
      </TouchableHighlight>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  buttonVisited: {
    height : 30,
    backgroundColor: '#ff8f01',
    width : 30,
    margin: 6,
    //borderWidth: 0,
    //borderColor: '#b4b4b4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonNotVisited: {
    height : 30,
    //paddingRight: 20,
    //paddingLeft: 20,
    backgroundColor: 'transperant',
    width : 30,
    margin: 6,
    borderWidth: 3,
    borderColor: '#b4b4b4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  submit: {
    color: 'white',
    //fontWeight: '600'
  },
  buttonContainer: {
    alignItems : 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default Button;