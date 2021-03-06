// Packages Imports
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AuthStackParamsList } from "./NavigationTypes";

// screen imports
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

// Create a Stack Navigator
const Stack = createStackNavigator<AuthStackParamsList>();

// Function for AuthNavigator
function AuthNavigator() {
  // Get the app theme here
  const { colors } = useTheme();

  // default options for the Stack Screens
  const screenOptions: StackNavigationOptions = {
    headerStyle: { backgroundColor: colors.background },
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
}

// Exporting AuthNavigator
export default AuthNavigator;
