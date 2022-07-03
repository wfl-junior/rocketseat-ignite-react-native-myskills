import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "white",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

function* getIdGenerator() {
  let id = 0;

  while (true) {
    yield ++id;
  }
}

const idGenerator = getIdGenerator();

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(skills => [
      ...skills,
      {
        id: idGenerator.next().value,
        text: newSkill,
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Wallace Júnior</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50, marginBottom: 40 }]}>
        My Skills
      </Text>

      {mySkills.map(skill => (
        <TouchableOpacity
          key={`${skill.text}:${skill.id}`}
          style={styles.buttonSkill}
          activeOpacity={0.7}
        >
          <Text style={styles.textSkill}>{skill.text}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
