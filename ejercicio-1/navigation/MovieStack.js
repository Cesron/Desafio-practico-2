import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movies } from "../screens";
import Preview from "../screens/Preview";

const Stack = createNativeStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Preview" component={Preview} />
    </Stack.Navigator>
  );
}
