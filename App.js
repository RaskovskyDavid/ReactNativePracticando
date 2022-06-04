import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import  { useState, useEffect } from 'react';



export default function App() {
 
  return (
    <View style={styles.container}>
    <ActivityIndicator 
    size="large"
    color="#000fff"
    />
    </View>
  );
}

const styles = StyleSheet.create({
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
