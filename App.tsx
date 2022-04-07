// Import all necessary packages
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import OnBoarding from "./screens/OnBoarding/OnBoarding";
import SignUp from "./screens/SignUp";

// export the app component
export default function App() {
  return (
      <View style={styles.container}>
        <OnBoarding />
      </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
