import { View } from 'react-native'
import { BatLogo} from '../../components/BatLogo/BatLogo'
import styles from './HomeStyle'
import { BatTextInput } from '../../components/BatTextInput/BatTextInput'
import { StatusBar } from 'expo-status-bar'


export default function Home(){
    return(
        <View style={styles.appContainer}>
            <StatusBar style='light'/>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.imputContainer}>
                <BatTextInput/>
            </View>
        </View>
    )
}


  