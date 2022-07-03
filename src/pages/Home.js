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
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export const Home = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome, Wallace</Text>

    <TextInput
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#555"
    />

    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>

    <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
  </SafeAreaView>
);
