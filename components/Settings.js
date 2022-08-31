import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import styles from './Style';
import Header from './Header';
import SearchBar from './Searchbar';
import Button from './Button';
import CardSettings from './CardSettings';

const Settings = ({ countries, updateVisited, numOfVisited }) => {

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollStyle}>
        <CardSettings numOfVisited={numOfVisited} />
      </ScrollView>
      <View style={{paddingBottom:10}}><Text>This app is made by Ömer Erdem Ahsen</Text></View>
    </View>
  );
};
export default Settings;