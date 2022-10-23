import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { CoomingSoon, Movies, Series } from "../screens";
import MovieStack from "./MovieStack";
import SerieStack from "./SerieStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabActivetintColor: "purple",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="MovieStack"
          component={MovieStack}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="videocam" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="SerieStack"
          component={SerieStack}
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
