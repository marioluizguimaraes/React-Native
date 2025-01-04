import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './LogoStyles';
import logo from '../../../assets/file-lock.png'
export function Logo() {
  return (
    <>
      <Image source={logo} alt='cadiado roxo dentro de um reteangolo vertical branco'/>
      <Text>Key Generator</Text>
      <Text>Gere senhas seguras e manhetna-se seguro</Text>
    </>
  );
}