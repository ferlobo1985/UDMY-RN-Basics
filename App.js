import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView, Button, Platform, FlatList } from 'react-native';

/// COMPONENTS
import Nav from './components/nav';

export default function App() {

  const users = [
    {id:1,name:'Francis'},
    {id:2,name:'Steve'},
    {id:3,name:'Miles'},
    {id:4,name:'Lisa'},
    {id:5,name:'Mark'},
    {id:6,name:'Deuce'},
    {id:7,name:'Lebron'},
    {id:8,name:'Wayne'},
  ];
  
  return (
      <>
      <StatusBar style='dark' />
      <View style={{flex:1}}>
          <Nav nameOfApp="Awesome App"/>
          <FlatList
            data={users}
            renderItem={({item})=>{
              return(
                <View style={styles.listContainer}>
                  <Text style={{fontSize:20}}>{item.name}</Text>
                </View>
              )
            }}
            keyExtractor={ item => item.id}
          />
      </View>
      </>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    marginBottom:100
  },
  listContainer:{
    backgroundColor:'lightblue',
    padding:30,
    marginVertical:50
  }
})