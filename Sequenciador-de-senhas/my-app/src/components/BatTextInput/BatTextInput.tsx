import React from 'react';
import {TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    <>
        <TextInput placeholder='Pass' style={styles.inputer} />
    </>
  );
}