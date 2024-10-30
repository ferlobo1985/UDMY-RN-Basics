import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

/// COMPONENTS
import Nav from './components/nav';
import PressComp from './components/pressComp';

export default function App() {
  return (
    <View style={styles.container}>
        <Nav nameOfApp="Awesome App"/>
        <View>
          <PressComp/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
})