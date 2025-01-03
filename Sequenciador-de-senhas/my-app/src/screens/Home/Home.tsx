import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { BatLogo} from '../../components/BatLogo/BatLogo'
import styles from './Style'


export default function Home(){
    return(
        <View style={styles.container}>
            <View>
                <BatLogo/>
            </View>
        </View>
    )
}


  