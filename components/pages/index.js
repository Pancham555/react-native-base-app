import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Home from "./home";
import Profile from "./profile";
import { colors } from "../../constants/themes";
const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: ({ ...props }) => (
          <Pressable
            {...props}
            // android_ripple={{ borderless: true }}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          paddingBottom: 2,
          fontFamily: "outfit-semibold",
        },
        tabBarStyle: {
          paddingTop: 2,
          height: 48,
        },
        tabBarActiveTintColor: colors["theme-2"],
        tabBarInactiveTintColor: colors.inactive,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
