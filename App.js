import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddCountry from './components/AddCountry';
import Home from './components/Home';
import Settings from './components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import countriesData from './countries.json';
// https://ionic.io/ionicons

const Tab = createBottomTabNavigator();
//const restURL = require('./movies.json');
//const restURL = 'https://reactnative.dev/movies.json';
// https://gist.github.com/Keeguon/2310008#file-countries-json
//const restURL = './countries.json'

const App = () => {

  const [countries, setCountries] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [numOfVisited, setNumOfVisited] = useState(0);
  const getCountries = () => {
    //countriesData.countries.map(({ name }) => (this.setState({countries: [...this.state.countries, {name}] })));
    countriesData.countries.map(({ name, continent }) =>
      setCountries((current) => [
        ...current,
        { name, continent, visited: false, show: true },
      ])
    );
    //console.log(this.state.countries);
  };

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      getCountries();
    }
  });
  const isCountryVisited = (ctname) => {
    if(ctname==="") {
      return "black";
      }
    if(countries.filter((item)=> item.name === ctname).length===0) {
      return "black";
      }
    if (countries.filter((item)=> item.name === ctname)[0].visited)
    {
      return "#ff8f01";
    }
    else{
      return "black";
    }
  };
  const updateVisited = (ctname) => {
    setCountries((prevState) => {
      const newState = prevState.map((item) => {
        if (item.name === ctname) {
          if (item.visited === true) {
            setNumOfVisited(numOfVisited-1);
            return { ...item, visited: false };
          } else {
            setNumOfVisited(numOfVisited+1);
            return { ...item, visited: true };
          }
        }
        return item;
      });
      return newState;
    });
  }
  const getResult = (ctname) => {
    if (ctname.length === 0) {
      setCountries((prevState) => {
        const newState = prevState.map((item) => {
          return { ...item, show: true };
        });
        return newState;
      });
    } else {
      setCountries((prevState) => {
        const newState = prevState.map((item) => {
          var smallboi = item.name.toString().substring(0, ctname.length);
          if (smallboi.toLowerCase() == ctname.toLowerCase()) {
            return { ...item, show: true };
          } else {
            return { ...item, show: false };
          }
        });
        return newState;
      });
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'planet' : 'planet-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff8f01',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          children={() => (
            <Home
              countries={{ countries: countries }}
              updateVisited={updateVisited}
              isCountryVisited={isCountryVisited}
              getResult={getResult}
            />
          )}
        />
        <Tab.Screen
          name="Add"
          options={{ headerShown: false }}
          children={() => (
            <AddCountry
              countries={{ countries: countries }}
              updateVisited={updateVisited}
              getResult={getResult}
            />
          )}
        />
        <Tab.Screen
          name="Settings"
          options={{ headerShown: false }}
          children={() => <Settings countries={{ countries: countries }} numOfVisited={numOfVisited}  />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
