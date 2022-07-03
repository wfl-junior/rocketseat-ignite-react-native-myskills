import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

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
    if (!newSkill) {
      return;
    }

    const id = idGenerator.next().value;

    setMySkills(skills => [
      ...skills,
      {
        id: `${newSkill}:${id}`,
        text: newSkill,
      },
    ]);

    setNewSkill("");
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

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 40 }]}>
        My Skills
      </Text>

      {mySkills.map(skill => (
        <SkillCard key={skill.id} skill={skill.text} />
      ))}
    </SafeAreaView>
  );
}
