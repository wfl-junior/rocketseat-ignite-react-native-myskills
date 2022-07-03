import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

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

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
