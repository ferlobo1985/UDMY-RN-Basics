import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

/// COMPONENTS
import Nav from './components/nav';

export default function App() {
  const { width, height} = useWindowDimensions();
  console.log(width, height)

  let boxSize = height > 400 ? 200:400;
  let color = height > 400 ? { backgroundColor:'yellow'}:{backgroundColor:'lightblue'}

  return (
      <View>
          <Nav nameOfApp="Awesome App"/>
          <View style={{flexDirection:'column',alignItems:'center'}}>
            <View style={[styles.box,{
              width:boxSize,
              height:boxSize
            },
            color
            ]}>
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
    // width: width < 400 ? 200:250,
    // height: width < 400 ? 200:250,
    margin: width > 350 ? 10:30,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: width > 400 ? 'yellow':'lightblue'
  }
})