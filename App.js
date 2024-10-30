import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import { useState } from 'react';

import Wave from './assets/images/Wave.jpg'

/// COMPONENTS
import Nav from './components/nav';

export default function App() {
  return (
      <View>
          <Nav nameOfApp="Awesome App"/>
          <ImageBackground
            // source={{uri:'https://picsum.photos/500/500'}}
            source={Wave}
            style={styles.wave}
            resizeMode='cover'
            onLoad={()=> console.log('Loding...')}
            onLoadStart={()=> console.log('start loading')}
            onLoadEnd={()=> console.log('Done loading')}
          >
            <Text>Say something</Text>
          </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  wave:{
    width:'100%',
    height:300,
    marginTop:20
  }
})