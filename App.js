import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainView}>
      <View style={{backgroundColor:'red',width:'100%'}}>
        <Text>This is my view 1</Text>
      </View>
      <View>
        <Text>This is my view 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    paddingTop:50,
    backgroundColor:'red'
  }
})