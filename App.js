import { StyleSheet, View,   Button , Alert} from 'react-native';
import  { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
// import { Alert } from 'react-native-web';



export default function App() {
  const buscaLocation = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync()
    if (status !== 'granted')
    {
      return Alert.alert('No tenemos los permisos necesario para acceder a la location')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location);
  }
useEffect(() => {
  buscaLocation()
})
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
backgroundColor:'#eee',
flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  center:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  container: {
    flex: 1,
    flexDirection:  'column',
    
    backgroundColor: '#fff',
    alignItems:'stretch',
  justifyContent: 'center',
 paddingTop: 22
  }
});
