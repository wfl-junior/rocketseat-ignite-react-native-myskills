import { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import { getGreeting } from "../utils/getGreeting";

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
  greeting: {
    color: "white",
  },
});

interface Skill {
  id: string;
  name: string;
}

export const Home: React.FC = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<Skill[]>([]);

  function handleAddNewSkill() {
    if (!newSkill) {
      return;
    }

    const id = Date.now().toString();

    setMySkills(skills => [
      ...skills,
      {
        id: `${newSkill}:${id}`,
        name: newSkill,
      },
    ]);

    setNewSkill("");
  }

  function handleDeleteSkill(id: Skill["id"]) {
    setMySkills(skills => {
      return skills.filter(skill => skill.id !== id);
    });
  }

  const greeting = getGreeting();

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="welcome" style={styles.title}>
        Welcome, Wallace Júnior
      </Text>

      <Text style={styles.greeting}>{greeting}!</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
        onSubmitEditing={handleAddNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 40 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={skill => skill.id}
        renderItem={({ item: skill }) => (
          <SkillCard
            skill={skill.name}
            onPress={() => handleDeleteSkill(skill.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};
