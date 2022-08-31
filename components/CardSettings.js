import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Style';
import {VictoryPie } from "victory-native";

const windowWidth = Dimensions.get('window').width;

const numOfCountries = 245;

const CardSettings = ({ countries, updateVisited, numOfVisited }) => {
  //const widthAndHeight = 250;
  //const series = [123, 321, 123, 789, 537];
  //const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
  const myData = [
    { x: numOfVisited > 0 ? 'Visited ' : ' ', y: numOfVisited },
    {
      x: numOfCountries - numOfVisited > 0 ? 'Not visited' : ' ',
      y: numOfCountries - numOfVisited,
    },
  ];

  return (
      <View style={stylest.cardSettingsStyle}>
        <VictoryPie
          data={myData}
          colorScale={['#ff8f01', 'white']}
          labels={({ datum }) => `${datum.x} ${datum.y>0 ? datum.y: ''}`}
          radius={100}
          height={300}
          innerRadius={60}
        />
        <View>
          <Text style={{color: 'white'}}>
            You have visited {((numOfVisited/numOfCountries)*100).toFixed(2)}% of the countries
          </Text>
        </View>
      </View>
  );
};

const stylest = StyleSheet.create({
  cardSettingsStyle: {
    //flex : 1,
    backgroundColor: 'gray',
    width: windowWidth * 0.85,
    margin: 20,
    alignItems: 'center',
    //height: windowWidth * 0.2,
    borderRadius: 10,
    padding: 2,
  },
});
export default CardSettings;
