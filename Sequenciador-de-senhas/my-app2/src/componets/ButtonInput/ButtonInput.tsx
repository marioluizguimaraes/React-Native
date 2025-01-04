import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { styles } from './ButtonInputStyles';
import copy from '../../../assets/copy 1.png'
import arrow from '../../../assets/arrow-clockwise 1.png'
import { InputText} from '../InputText/InputText'
export function ButtonImput() {
  return (
    <>
      <InputText/>
      <Pressable onPress={()=> {console.log('gerou senha')}} style={styles.buttonGenerat}>
        <Text style={styles.textButton}> <Image source={arrow}/> Gerar Senha</Text>
      </Pressable>
      <Pressable onPress={()=> {console.log('Copiou senha')}} style={styles.buttonCopy}>
        <Text style={styles.textButton}> <Image source={copy}/> Copiar Senha</Text>
      </Pressable>
    </>
  );
}