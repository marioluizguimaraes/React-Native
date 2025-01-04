import React from 'react';
import { Button } from 'react-native';
import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <>
        <Button onPress={()=>{console.log('Clicou')}} title='BOTÃO' accessibilityLabel='Click em mim'/>
    </>
  );
}