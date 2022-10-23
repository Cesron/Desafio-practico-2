import { StyleSheet, Text, View } from "react-native";

import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { useDataContext } from "../context/DataContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  description: {
    fontSize: 25,
  },
});

export default function PreviewSeries({}) {
  const { serieData } = useDataContext();

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={500}
        play={true}
        videoId={serieData.data.trailer}
      />
      <Text style={styles.title}> {serieData.data.title} </Text>
      <Text style={styles.description}> {serieData.data.description} </Text>
    </View>
  );
}
