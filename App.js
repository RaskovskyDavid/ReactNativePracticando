import { StyleSheet, Text, View, FlatList } from 'react-native';
import  { useState } from 'react';



export default function App() {
  return (
    <View style={styles.container}>
     <FlatList
     data={[
       {key: '1', nombre: 'David'},
       {key: '2', nombre: 'Ariel'},
       {key: '3', nombre: 'Raskovsky'},
       {key: '4', nombre: 'Capo'},
       {key: '5', nombre: 'Muy'},
       {key: '6', nombre: 'Bine'},
       {key: '7', nombre: 'David'}
     ]}
     renderItem={({item})=> <Text style={styles.item}>{item.nombre}</Text>} >

     </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
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
