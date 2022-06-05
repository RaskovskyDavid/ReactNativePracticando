import { StyleSheet, View, Modal, Text, Button } from 'react-native';
import  { useState, useEffect } from 'react';



export default function App() {
 const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
    <Modal
    // animationType='fade' // aparece lentamente 
    // animationType='none' // aparece lentamente 
    animationType='slide' // aparece Deslizandose desde fuera de la pantalla 
    transparent={true}
    visible={modal}
    >
      <View
        style={styles.center}
      >
        <View style={styles.content}>
          <Text>Soy un Modal</Text>
          <Button title='Cerrar modal' onPress={()=> setModal(!modal)}></Button>
        </View>
      </View>
      
    </Modal>
    <Button title='Abrir modal' onPress={() => setModal(!modal)} />
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
