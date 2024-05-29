import { Text, View, StyleSheet } from "react-native";

export type TimerProps = {
  time: number;
};

export const Timer: React.FC<TimerProps> = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 20,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
