import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    appContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333333',
      
    },
    logoContainer:{
      flexDirection:  'column',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingTop: 20,
      paddingBottom: 10,
      marginBottom: 60,
      backgroundColor: '#4d4d4d'
    },
    imputContainer:{
      width: '80%',
      borderWidth: 2,
      borderColor: 'red'
    }
  });

export default styles;