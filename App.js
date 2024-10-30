import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

/// COMPONENTS
import Nav from './components/nav';

export default function App() {


  return (
      <View>
          <Nav nameOfApp="Awesome App"/>
          <View style={{flexDirection:'column',alignItems:'center'}}>
            <View style={styles.box}>
                <Text>One</Text>
            </View>
          </View>
      </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  box:{
    width: width < 400 ? 200:250,
    height: width < 400 ? 200:250,
    margin: width > 350 ? 10:30,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: width > 400 ? 'yellow':'lightblue'
  }
})