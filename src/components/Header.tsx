import { TimerType } from "@/src/enums/types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Stages } from "../utils/stages";

export type HeaderProps = {
  currentTimer: TimerType;
  setCurrentTimer: (timer: TimerType) => void;
  setTime: (time: number) => void;
};

export const Header: React.FC<HeaderProps> = ({
  currentTimer,
  setCurrentTimer,
  setTime,
}) => {
  const handlePress = (opt: (typeof Stages)[number]) => {
    setCurrentTimer(opt.value);
    setTime(opt.time);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {Stages.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.itemStyle,
            currentTimer !== option.value && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(option)}
        >
          <Text style={{ fontWeight: "bold" }}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 2,
    padding: 5,
    alignItems: "center",
    borderColor: "#fff",
    borderRadius: 10,
    marginVertical: 20,
  },
});
