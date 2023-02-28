import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
  },
  bold: {
    fontWeight: 'bold'
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style = {styles.title}>Liste des <Text style = {styles.bold}>Tâches</Text> :</Text>
      </View>
      <View>
        {sampleGoals.map((goal) => (<Text>{goal}</Text>))}
      </View>
    </View>
  );
}
