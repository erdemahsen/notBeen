import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import Button from './Button';
import styles from './Style';
import HomeRenderCard from './HomeRenderCard';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const RenderContinent = ({ countries, updateVisited, continent }) => {

  return (
    <View style={styles.container}>

      <View style={{ justifyContent: 'center', backgroundColor: '#505050', width: windowWidth*0.9,borderWidth: 0.5, borderColor: 'black', borderRadius:4, paddingLeft:5}}>
          <Text style={{color: 'white', fontSize: 18}}>{continent}</Text>
      </View>

      <ScrollView style={styles.scrollStyle}>
        <FlatList
          data={countries.countries}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (item.visited && item.continent === continent ? 
          <HomeRenderCard country = {item} updateVisited={updateVisited} />
          : '')}
        />
      </ScrollView>
    </View>
  );
};
export default RenderContinent;
