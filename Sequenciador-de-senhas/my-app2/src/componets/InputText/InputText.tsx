import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './InputTextStyles';

export function InputText() {
  return (
    <>
      <TextInput placeholder='senha' style ={styles.input} value=''/>
    </>
  );
}