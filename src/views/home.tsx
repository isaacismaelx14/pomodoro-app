import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import { TimerType } from "@/src/enums/types";
import { Header } from "@/src/components/Header";
import { Timer } from "@/src/components/Timer";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export const HomeView = () => {
  const [time, setTime] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState<TimerType>(TimerType.WORK);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setTime(currentTimer === TimerType.WORK ? 25 * 60 : 5 * 60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, currentTimer]);

  function handleToggle() {
    setIsActive((prev) => !prev);
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors[currentTimer],
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" ? 30 : 0,
          flex: 1,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
          setTime={setTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {isActive ? "Pause" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 15,
  },
});
