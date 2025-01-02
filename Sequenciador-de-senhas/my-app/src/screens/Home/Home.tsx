import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from './Style'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Home Components!</Text>
            <StatusBar style="auto" />
        </View>
    )
}


  