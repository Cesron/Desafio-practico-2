import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Series() {
  return (
    <View style={styles.container}>
      <Text>Series</Text>
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
