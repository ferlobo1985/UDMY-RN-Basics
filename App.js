import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

/// COMPONENTS
import Nav from './components/nav';
// import PressComp from './components/pressComp';
import InputComp from './components/input';

export default function App() {
  return (
    <>
      <View style={styles.container}>
          <Nav nameOfApp="Awesome App"/>
          <ScrollView
            // onContentSizeChange={(w,h)=>alert(h)}
            // onScroll={()=>alert('Scroll')}
            // onScrollBeginDrag={()=>console.log('begin')}
            // onScrollEndDrag={()=> console.log('end')}
            // onMomentumScrollBegin={()=> console.log('M start')}
            // onMomentumScrollEnd={()=> console.log('M end')}
          >
            <InputComp/>
          </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
})