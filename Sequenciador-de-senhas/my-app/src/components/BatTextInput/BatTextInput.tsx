import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    <>
        <TextInput style={styles.inputer} placeholder='Senha'/>
    </>
  );
}