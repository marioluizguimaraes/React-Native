import React from 'react';
import { TextInput} from 'react-native';
import { styles } from './InputTextStyles';

interface InputText{
  pass:string
}

export function InputText(props: InputText) {
  return (
    <>
      <TextInput value={props.pass} placeholder='Senha' placeholderTextColor='#5C5C5C' style ={styles.input} />
    </>
  );
}