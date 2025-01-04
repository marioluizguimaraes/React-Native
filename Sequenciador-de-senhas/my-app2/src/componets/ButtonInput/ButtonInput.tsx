import React, { useState } from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { styles } from './ButtonInputStyles';
import copy from '../../../assets/copy 1.png'
import arrow from '../../../assets/arrow-clockwise 1.png'
import { InputText} from '../InputText/InputText'
import generatPass from '../../service/PassGeneratService';
import * as Clipboard from 'expo-clipboard'

export function ButtonImput() {
  let [pass, setPass] = useState('')

  function handleGeneratButton(){
    setPass(generatPass())
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }


  return (
    <>
      <InputText pass={pass}/>
      <Pressable onPress={handleGeneratButton} style={styles.buttonGenerat}>
        <Text style={styles.textButton}> <Image source={arrow}/> Gerar Senha</Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.buttonCopy}>
        <Text style={styles.textButton}> <Image source={copy}/> Copiar Senha</Text>
      </Pressable>
    </>
  );
}