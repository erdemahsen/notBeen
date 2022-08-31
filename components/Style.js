import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#efefef',
    flex: 1,
  },
  countryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  paragraph: {
    margin: 20,
    marginTop: 6,
    fontSize: 25,
    //fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#ff8f01',
    flex: 0.13,
    width: windowWidth,

  },
  header2: {
    backgroundColor: '#ff8f01',
    width: windowWidth,

  },
  searchTextStyle: {
    flex: 1,
    //backgroundColor: 'blue',
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    height: 30,
    margin: 8,
    width: windowWidth*0.85,
  },
  scrollStyle:{
    flex:1,
    width: windowWidth,
    alignItems: 'center',
    padding: 10,
  },
  searchBarStyle:{
    flex:0.11,
  },
  cardListing: {
    flex:1,
    flexDirection: 'row', 
    backgroundColor: '#efefef', 
    margin: 0,
    borderRadius: 0,
    borderColor: 'black',
    borderWidth: 0,
    alignContent: "space-between",
    alignItems: 'center',
    //height: windowHeight*0.8,
    width: windowWidth*0.9,
    justifyContent: 'space-between',
  },

});

export default styles;