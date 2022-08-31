import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Style';

const SearchBar = ({ countries, updateVisited, getResult }) => {
  const [term, setTerm] = useState('');
  const [ph, setPh] = useState('Type a Country Name');

  const updateStuff = (text) => {
    setTerm(text);
    getResult(text);
  }

  return (
    <View style={styles.searchBarStyle}>
      <TextInput
        style={styles.searchTextStyle}
        value={term}
        placeholder={ph}
        onChangeText={(text) => updateStuff(text)}
        onKeyPress={() => console.log('hi')}
      />
    </View>
  );
};
export default SearchBar;
