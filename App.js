import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}><Text>One</Text></View>
      <View style={styles.two}><Text>Two</Text></View>
      <View style={styles.three}><Text>Three</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'strech',
    height:200
  },
  one:{
    flex:2,
    borderWidth:1
  },
  two:{
    flex:1,
    borderWidth:1
  },
  three:{
    borderWidth:1
  }
})