import React from 'react';
import { Button, Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <>  
        <Pressable onPress={()=>{console.log('gerou')}} style={styles.button}>    
            <Text style={styles.text}>Generat</Text>
        </Pressable>
    
        <Pressable onPress={()=>{console.log('copiou')}} style={styles.button}>    
            <Text style={styles.text}>⚡ Copy</Text>
        </Pressable>
    </>
  );
}