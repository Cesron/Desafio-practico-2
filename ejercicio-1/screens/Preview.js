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

export default function Preview({}) {
  const { movieData } = useDataContext();

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={500}
        play={true}
        videoId={movieData.data.trailer}
      />
      <Text style={styles.title}> {movieData.data.title} </Text>
      <Text style={styles.description}> {movieData.data.description} </Text>
    </View>
  );
}
