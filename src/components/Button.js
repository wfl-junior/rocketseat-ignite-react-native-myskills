import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
}
