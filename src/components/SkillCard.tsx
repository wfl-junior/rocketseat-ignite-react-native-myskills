import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

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

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>{skill}</Text>
  </TouchableOpacity>
);
