import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyles';
import { Logo } from '../../components/Logo/Logo';
import { StatusBar } from 'expo-status-bar'
import { ButtonImput } from '../../components/ButtonInput/ButtonInput';

export function Home() {
  return (
    <View style={styles.appContainer} > 
      <View style={styles.logoContainer}>
        <Logo/>
      </View>
      <View>
         <ButtonImput/>
      </View>
    </View>
  );
}