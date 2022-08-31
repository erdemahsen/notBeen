import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from './Button';
import styles from './Style';

const RenderCard = ({ countries, updateVisited, getResult, country }) => {
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
      <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
        <Text style={isCountryVisited()}>
          {country.name} (
          {country.continent})
        </Text>
      </View>
      <View style={{ justifyContent: 'center', paddingRight: 7 }}>
        <Button updateVisited={updateVisited} country={country} />
      </View>
    </View>
  );
};
export default RenderCard;
