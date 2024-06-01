import { Link } from "expo-router";
import { Text, SafeAreaView, StyleSheet, View, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, Label } from "tamagui";

export const SettingsView = () => {
  return (
    <SafeAreaView style={[styles.container]}>
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
          }}
        >
          <Link
            href={"/"}
            style={{
              marginRight: 20,
            }}
          >
            <AntDesign name="arrowleft" size={28} color="black" />
          </Link>
          <Text style={styles.text}>Settings</Text>
        </View>
        {/* Pomodoro Timer */}
        <Label
          style={{
            fontWeight: "bold",
          }}
        >
          Pomodoro Timer
        </Label>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            25 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            50 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            1 Hour
          </Button>
        </View>

        {/* Short Break Timer */}
        <Label
          style={{
            fontWeight: "bold",
            marginTop: 15,
          }}
        >
          Short Break Timer
        </Label>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            5 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            10 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            15 Minutes
          </Button>
        </View>

        {/* Long Break Timer */}
        <Label
          style={{
            fontWeight: "bold",
            marginTop: 15,
          }}
        >
          Long Break Timer
        </Label>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            15 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            30 Minutes
          </Button>
          <Button
            theme="blue_active"
            onPress={() => {
              alert("Hello World!");
            }}
            style={{
              flex: 1,
            }}
          >
            1 Hour
          </Button>
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
    color: "black",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
  },
});
