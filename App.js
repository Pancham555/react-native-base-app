import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Index from "./components/pages/";
import Login from "./components/pages/login";
import OnBoarding from "./components/pages/onBoarding";
import Item from "./components/pages/item";
import { StatusBar } from "expo-status-bar";
import Check from "./components/pages/check";
export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/outfit/static/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/outfit/static/Outfit-Medium.ttf"),
    "outfit-black": require("./assets/fonts/outfit/static/Outfit-Black.ttf"),
    "outfit-bold": require("./assets/fonts/outfit/static/Outfit-Bold.ttf"),
    "outfit-extrabold": require("./assets/fonts/outfit/static/Outfit-ExtraBold.ttf"),
    "outfit-extralight": require("./assets/fonts/outfit/static/Outfit-ExtraLight.ttf"),
    "outfit-light": require("./assets/fonts/outfit/static/Outfit-Light.ttf"),
    "outfit-semibold": require("./assets/fonts/outfit/static/Outfit-SemiBold.ttf"),
    "outfit-thin": require("./assets/fonts/outfit/static/Outfit-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Check"
            component={Check}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Index"
            component={Index}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Item"
            component={Item}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
