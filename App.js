import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GeoLocation from "./Geolocation";
import HomeScreen from "./HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <Text>test for geolocation</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
