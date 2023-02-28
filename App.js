import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'red',
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style = {styles.title}>Liste des Tâches :</Text>
    </View>
  );
}
