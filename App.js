import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, {useState} from 'react';

const TextpState = () => {
  const [texto, setTexto]= useState("Hola State")
  const actualizaTexto = () =>
  {
    setTexto("Chao State")
  }
  return <Text style={[styles.red,{fontSize: 24}]} onPress={actualizaTexto}>{texto}</Text>
}

const Texto = (props) => {
  const {texto} = props;
  return <Text style={[styles.text, styles.blue]}>{texto}</Text>
}
const Texto2 = (props) => {
  const {children} = props;
  return <Text style={styles.green}>{children}</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto texto={"Hola Mundo"}></Texto>
      <Texto2>Chao Mundo</Texto2>
      <TextpState></TextpState>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
    height:100,
    // width:100
  },
  // 3 + 2 + 1 = 6
  red:{ // 1/6
 //   flex:1,
    backgroundColor: 'red'
  },
  green:{
  //  flex:2, // 2/6 = 1/3
    backgroundColor: 'green'
  },
  blue:{
   // flex:3, //  3/6 = 1/2
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
   // flexDirection:  'column-reverse',  mueve el contenido direccion vertical invertida
    flexDirection:  'column',//  mueve el contenido direccion vertical
  //   flexDirection:  'row-reverse', mueve el contenido direccion horizontal invertida
   //  flexDirection: 'row', mueve el contenido direccion horizontal
    
    backgroundColor: '#fff',
    
   justifyContent: 'center', // acomoda el contenido en el centro
   // justifyContent: 'flex-start' // acomoda el contenido en el inicio arriba
    // justifyContent: 'flex-end' // acomoda el contenido en el final abajo
    // justifyContent: 'space-between' // acomoda los elemntos con un espaciado entre ellos
    // justifyContent: 'space-around'  // acomoda los elemntos con un espaciado entre ellos sea mas equitativo
    // justifyContent: 'space-evenly' // acomoda los elemntos con un espaciado entre ellos 
    // alignItems: 'center', // alinar los contenidos de izquierda a derecha, tal cual como justifycontent 
    // alignItems: 'flex-start' // alinar los contenidos al inicio
    // alignItems: 'baseline'
    alignItems: 'stretch' //trat de usar el maximo ancho
    // alignItems: 'flex-end',
  }
});
