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
import RenderCard from './RenderCard';

const AddCountry = ({ countries, updateVisited, getResult }) => {
  //const {countries} =
  //useEffect(() => console.log(countries));

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar getResult={getResult}/>
      <ScrollView style={styles.scrollStyle}>
        <FlatList
          data={countries.countries}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (item.show ? 
          <RenderCard country = {item} updateVisited={updateVisited} />: '')}
        />
      </ScrollView>
    </View>
  );
};
/*
export default function AddCountry(props) {
  const {countries}=props;
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <FlatList
        data={countries}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>
            {item.title} {item.releaseYear} easd
          </Text>
        )}
      />
      
    </View>
  );
}
*/
export default AddCountry;
