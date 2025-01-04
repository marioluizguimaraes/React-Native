import React from 'react';
import {TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BatTextInput{
  pass:string
}

export function BatTextInput(props:BatTextInput) {

  
  return (
    <>
        <TextInput 
          placeholder='Pass' 
          style={styles.inputer} 
          value={props.pass} 
        />
    </>
  );
}