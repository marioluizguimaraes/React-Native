import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from './Style'
import { Menu } from '../../components/Menu/Menu'

export default function Home(){
    return(
        <View style={styles.container}>
            <Menu/>
        </View>
    )
}


  