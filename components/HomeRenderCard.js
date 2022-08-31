import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet, Text,Dimensions } from 'react-native';
import Button from './Button';
import styles from './Style';
const windowWidth = Dimensions.get('window').width;

const HomeRenderCard = ({ countries, updateVisited, getResult, country }) => {
    const isCountryVisited = () => {
    if(country.visited) {
      return {color: '#ff8f01' };
    }
    else {
      return {color: '#b4b4b4' }
    }
  };
  return (
    <View style={styles.cardListing}>
      <View style={{ justifyContent: 'center', paddingLeft: 10 , backgroundColor: 'white', width: windowWidth*0.9,borderWidth: 0.5, borderColor: 'black'}}>
        <Text style={{color: '#505050',fontSize: 17}}>
          {country.name}
        </Text>
      </View>
    </View>
  );
};
export default HomeRenderCard;
