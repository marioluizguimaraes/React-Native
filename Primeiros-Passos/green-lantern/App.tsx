import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  
  let [active, setActive]  = useState(false);
  
  function lanterna(){
      setActive((oldValue:boolean)=>{return !oldValue})
  }

  return (
    <View style={active ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={lanterna}>
        <Image source={active ? symbolOn : symbolOff}/>
      </TouchableOpacity>
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
