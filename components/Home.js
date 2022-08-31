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
import WorldMap from './WorldMap';
import RenderContinent from './RenderContinent';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;


const Home = ({ countries, updateVisited, isCountryVisited, getResult }) => {
  //const {countries} =
  //useEffect(() => console.log(countries));

  return ( 
    <View style={styles.container}>
      <View style={styles.header2}>
        <Text style={styles.paragraph}>notBeen</Text>
      </View>
        <WorldMap countries={{ countries: countries }} isCountryVisited={isCountryVisited} />

        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#505050', width: windowWidth*0.3,borderWidth: 0.5, borderColor: 'black', borderRadius:4}}>
          <Text style={{color: 'white', fontSize: 19}}>WORLD</Text>
      </View>

        <ScrollView style={styles.scrollStyle}>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"Europe"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"Asia"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"North America"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"South America"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"Oceania"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"Africa"}/>
          </View>
          <View>
            <RenderContinent countries={countries} updateVisited={updateVisited} continent={"Antarctica"}/>
          </View>
        </ScrollView>
    </View>
  );
};

export default Home;
