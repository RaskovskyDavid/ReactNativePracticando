import { StyleSheet, Text, View, SectionList } from 'react-native';
import  { useState } from 'react';



export default function App() {
  return (
    <View style={styles.container}>
     <SectionList
     sections={[
       {
         title: 'Grupo1',
       data: [{key: '1', nombre: 'David'},
       {key: '2', nombre: 'Ariel'},
       {key: '3', nombre: 'Raskovsky'},
       {key: '4', nombre: 'Capo'},
       {key: '5', nombre: 'Muy'},]
      },
      {
        title: 'Grupo2',
        data: [{key: '6', nombre: 'David'},
        {key: '7', nombre: 'Ariel'},
        {key: '8', nombre: 'Raskovsky'},
        {key: '9', nombre: 'Capo'},
        {key: '10', nombre: 'Muy'},]
      }
      ]}
      renderItem={({ item}) => <Text style={styles.item}>{item.nombre}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}
      >

     </SectionList>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
fontSize: 16,
fontWeight: 'bold'
  },
 item: {
   padding:10,
  
  borderBottomColor: '#ccc',
  borderBottomWidth: 1
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
