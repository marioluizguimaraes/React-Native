import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyles';
import { Logo } from '../../componets/Logo/Logo';

export function Home() {
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  );
}