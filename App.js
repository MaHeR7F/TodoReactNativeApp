import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    padding: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  }
});

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function App() {

  const [text, onChangeText] = useState("Entrez nouvelle tâche");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style = {styles.title}>Liste des <Text style = {styles.bold}>Tâches</Text> :</Text>
      </View>
      <View>
        {sampleGoals.map((goal) => (<Text>{goal}</Text>))}
      </View>
      <View style = {styles.row}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
        />
        <Button
            style={styles.input}
            title="Ajouter"
            color="#0efb21"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
    </View>
  );
}
