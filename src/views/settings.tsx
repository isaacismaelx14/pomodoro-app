import { Link } from "expo-router";
import { Text, SafeAreaView, StyleSheet, View, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
