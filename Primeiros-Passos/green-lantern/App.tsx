import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={{backgroundColor:'black', borderRadius: 8, color:'white', padding: 12 }}>
        Caixa de Texto:
      </TextInput>
      <Text style={style2.texto}>
        Hello Word!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const style2 = StyleSheet.create({
    texto:{
      fontSize: 24,
      fontWeight: 'bold'
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
