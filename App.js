import { StyleSheet, Text, View , TextInput, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
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
      <ScrollView style={styles.scrollView}>
      <Texto>{textSubmit}</Texto>
      <TextInput style={styles.input} placeholder='Escribir aqui' onChangeText={t => setTextito(t)} defaultValue={textito} ></TextInput>
      <TouchableHighlight 
      underlayColor={'#999'}
      activeOpacity={'0.6'}
      onPress={() => {
        setTextSubmit(textito)
        alert('El texto envidado con exito')
      }}>
        <Text>Aceptar</Text></TouchableHighlight>
        <Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        <Texto> Text : {textSubmit}</Texto><Texto> Text : {textSubmit}</Texto>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    width: width,
  },
  touchableOpacity: {
    backgroundColor: '#EEE'
  },
  view: {
    flex: 0.5,
    height: 40,
    width: 300,
  },
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
