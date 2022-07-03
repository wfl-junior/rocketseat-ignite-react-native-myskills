import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

interface SkillCardProps {
  skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>{skill}</Text>
  </TouchableOpacity>
);
