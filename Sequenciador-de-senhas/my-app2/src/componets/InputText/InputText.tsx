import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './InputTextStyles';

export function InputText() {
  return (
    <>
      <TextInput placeholder='Senha' placeholderTextColor='#5C5C5C' style ={styles.input} />
    </>
  );
}