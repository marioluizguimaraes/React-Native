import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './LogoStyles';
import logo from '../../../assets/file-lock.png'
export function Logo() {
  return (
    <>
      <Image source={logo}  style={styles.logo} alt='cadiado roxo dentro de um reteangolo vertical branco'/>
      <Text style={styles.title} >Key Generator</Text>
      <Text style={styles.subText}>Gere senhas seguras e manhetna-se seguro</Text>
    </>
  );
}