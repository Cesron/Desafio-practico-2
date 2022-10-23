import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Series } from "../screens";
import Preview from "../screens/Preview";

const Stack = createNativeStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator
      initialRouteName="Series"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="Preview" component={Preview} />
    </Stack.Navigator>
  );
}
