import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatPass from '../../services/PassGeneratService';
import * as Clipboard from 'expo-clipboard';


export function BatButton() {
  let [pass, setPass] = useState('')
  
  function handleGeneratButton(){
    let generatToken = generatPass()
    setPass(generatToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass); {/* funçao para copiar texto => 'npx expo install expo-clipboard' */}
  }
  
  return (
    <>  
        <BatTextInput pass={pass}/>

        <Pressable onPress={handleGeneratButton} style={styles.button}>    
            <Text style={styles.text}>Generat</Text>
        </Pressable>
    
        <Pressable onPress={handleCopyButton} style={styles.button}>    
            <Text style={styles.text}>⚡ Copy</Text>
        </Pressable>
    </>
  );
}