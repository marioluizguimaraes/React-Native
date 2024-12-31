import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, } from 'react-native';

import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'

export default function App() {

  let [active, setActive] = useState(false)
  function lanterna(){
    setActive((oldValue:boolean)=>{return !oldValue })
  }
  
  return (
    <View style={active ? styles.containerOn : styles.containerOff}>
         <Image source={active ? symbolOn : symbolOff}/>
         <Button title='Interrupitor' onPress={lanterna} color='green'/> 
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
