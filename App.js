import { StyleSheet, View,   Button , Alert} from 'react-native';
import  { useState, useEffect } from 'react';
// import { Alert } from 'react-native-web';

const crearDialogo = ()=> Alert.alert(
  'Titulo',
   'subtitulo o mensaje',
   [
     {
       text:'Cancelar',
       onPress: () => {},
     }
   ]
)

export default function App() {

  return (
    <View style={styles.container}>
    <Button title='Abrir dialogo' onPress={crearDialogo} />
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
