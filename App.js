import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
  },
  delete: {
    width: 20,
    justifyContent: 'flex-end'
  },
  align: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
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

  const [goals, setGoal] = useState(sampleGoals);

  const [newGoal, setNewGoal] = useState("");
  const textChanged = (text) => {
    setNewGoal(text);
  };
  const addGoal = () => {
    setGoal([...goals, newGoal]);
    setNewGoal("");
  }
  const removeGoal = (index) => {
    setGoal((lastState) => {
      const newState = [...lastState];
      newState.splice(index, 1);
      return newState;
    });
  };
  const renderItem = ({index, item}) => (
      <View style={styles.align}>
        <Text style={styles.row}>{item}</Text>
        <TouchableOpacity onPress={()=> removeGoal(index)}>
          <Text style={styles.delete}>x</Text>
        </TouchableOpacity>
      </View>
  );

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style = {styles.title}>Liste des <Text style = {styles.bold}>Objectifs</Text> :</Text>
        </View>
        <FlatList
            data={goals}
            renderItem={renderItem}
        />
        <View style = {styles.row}>
          <TextInput style={styles.input}
              onChangeText={textChanged}
              value = {newGoal}
              placeholder="Entrez nouvel Objectif"
          />
          <Button style={styles.input}
              title="Ajouter"
              color="#0efb21"
              onPress={addGoal}
          />
        </View>
      </View>
  );
}