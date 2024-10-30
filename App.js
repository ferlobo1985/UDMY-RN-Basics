import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView, Button } from 'react-native';

/// COMPONENTS
import Nav from './components/nav';

export default function App() {
  const { width, height} = useWindowDimensions();
  console.log(width, height)

  let boxSize = height > 400 ? 200:400;
  let color = height > 400 ? { backgroundColor:'yellow'}:{backgroundColor:'lightblue'}
  const boxStyle = [styles.box,{width:boxSize,height:boxSize},
  color];

  const boxes = (
    <>
      <View style={boxStyle}><Text>One</Text></View>
      <View style={boxStyle}><Text>One</Text></View>
      <View style={boxStyle}><Text>One</Text></View>
      <View style={boxStyle}><Text>One</Text></View>
    </>
  ) 
  const button = (<Button title='Press me'/>)

  const finalBlock = height > 400 ?
  (<>{button}{boxes}</>):(<>{boxes}{button}</>)

  return (
      <View>
          <Nav nameOfApp="Awesome App"/>
          <ScrollView>
            <View style={styles.container}>
              {finalBlock}
            </View>
          </ScrollView>
      </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    marginBottom:100
  },
  box:{
    // width: width < 400 ? 200:250,
    // height: width < 400 ? 200:250,
    margin: width > 350 ? 10:30,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: width > 400 ? 'yellow':'lightblue'
  }
})