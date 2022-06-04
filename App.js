import { StyleSheet, View, Image } from 'react-native';
import  { useState, useEffect } from 'react';



export default function App() {
 
  return (
    <View style={styles.container}>
    <Image 
    style={styles.photo}
    source={require('./assets/icon.png')}
    
    />
    <Image 
    style={styles.photo}
    source={{uri:'https://placekitten.com/200/200'}}
    
    />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 item: {padding:10,
  
  borderBottomColor: '#ccc',
borderBottomWidth: 1},
  container: {
    flex: 1,
    flexDirection:  'column',
    
    backgroundColor: '#fff',
    alignItems:'stretch',
  justifyContent: 'center',
 paddingTop: 22
  }
});
