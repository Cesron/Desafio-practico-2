import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CoomingSoon, Movies, Series } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabActivetintColor: "purple",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="videocam" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({}) => <Ionicons name="tv" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="CoomingSoon"
          component={CoomingSoon}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="time" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
