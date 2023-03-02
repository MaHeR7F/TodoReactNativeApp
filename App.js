import { StatusBar } from 'expo-status-bar';
import Header from './Components/Header';

import {
  Pressable,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
    marginHorizontal: 16
  },
  input: {
    padding: 10,
    textAlign: "center"
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1
  },
  delete: {
    width: 20,
    justifyContent: 'flex-end',
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red'
  },
  align: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  window: {
    marginTop : 10,
    flex: 1,
    paddingHorizontal:10
  },
  imgBackground : {
    flex : 1,
    justifyContent: "center"
  },
  app : {
    backgroundColor: 'white',
    borderRadius: 20
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
        <TouchableOpacity
            onPress={()=> removeGoal(index)}
        >
          <Text style={styles.delete}>x</Text>
        </TouchableOpacity>
      </View>
  );

  return (
      <>
      <StatusBar style="auto" />

      <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require("./src/Images/Goal.jpeg")}
      >
        <View style={styles.container}>
          <View style = {styles.app}>
            <Header/>
            <View style = {[styles.row, { justifyContent: "space-between"}]}>
              <TextInput style={[styles.input, {width: "70%"}]}
                         onChangeText={textChanged}
                         value = {newGoal}
                         placeholder="Entrez nouvel Objectif"
              />
              <Pressable
                  onPress={addGoal}
                  style={{width: "30%", backgroundColor: "#0efb21", borderWidth: 1}}
                  android_ripple={{ color: 'skyblue' }}
              >
                <Text style={styles.input}>Ajouter</Text>
              </Pressable>
            </View>
            <View style={styles.window}>
              <FlatList
                  data={goals}
                  renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      </>
  );
}