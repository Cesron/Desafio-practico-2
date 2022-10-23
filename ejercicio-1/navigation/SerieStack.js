import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Series } from "../screens";
import Preview from "../screens/Preview";
import PreviewSeries from "../screens/PreviewSeries";

const Stack = createNativeStackNavigator();

export default function SerieStack() {
  return (
    <Stack.Navigator
      initialRouteName="Series"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="PreviewSeries" component={PreviewSeries} />
    </Stack.Navigator>
  );
}
