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
import { getStage } from "../utils/stages";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

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
      const stage = getStage(currentTimer);
      setTime(stage?.time || 25 * 60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, currentTimer]);

  function handleToggle() {
    setIsActive((prev) => !prev);
  }

  function handleReset() {
    setIsActive(false);
    const stage = getStage(currentTimer);
    setTime(stage?.time || 25 * 60);
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Pomodoro</Text>
          <Link href={"/settings"}>
            <AntDesign name="setting" size={28} color="black" />
          </Link>
        </View>
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
        <View
          style={{
            minHeight: 80,
          }}
        >
          {isActive && (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#E74C3C",
                },
              ]}
              onPress={handleReset}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          )}
        </View>
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
    marginTop: 15,
  },
});
