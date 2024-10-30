import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import { useState } from 'react';

import Wave from './assets/images/Wave.jpg'

/// COMPONENTS
import Nav from './components/nav';
import ModalComponent from './components/modal';

export default function App() {
  return (
      <View>
          <Nav nameOfApp="Awesome App"/>
          <ModalComponent/>
      </View>
  );
}

const styles = StyleSheet.create({
})