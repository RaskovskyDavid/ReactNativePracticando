import { StyleSheet, Text, View , TextInput, Dimensions, Button} from 'react-native';
import  { useState } from 'react';

const width = Dimensions.get('window').width

const Texto = (props) => {
  const {children} = props;
  return <Text style={styles.green}>{children}</Text>
}

export default function App() {
  const [textito, setTextito] = useState('chanchito feliz');
  const [textSubmit, setTextSubmit] = useState('');
  return (
    <View style={styles.container}>
      <Texto>{textSubmit}</Texto>
      <TextInput style={styles.input} placeholder='Escribir aqui' onChangeText={t => setTextito(t)} defaultValue={textito} ></TextInput>
      <Button title='Aceptar' onPress={()=> {
        setTextSubmit(textito)
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
    height:100,
  },
  input:{
    height: 40,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    // width: '100%',
    width: width,
  },
  container: {
    flex: 1,
    flexDirection:  'column',
    
    backgroundColor: '#fff',
    
   justifyContent: 'center', 
    alignItems: 'center', 
  }
});
