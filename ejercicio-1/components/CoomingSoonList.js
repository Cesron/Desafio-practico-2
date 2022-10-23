import {
  Button,
  View,
  Alert,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: "silver",
    borderRadius: 8,
  },
  description: {
    textAlign: "justify",
    padding: 25,
  },
  date: {
    textAlign: "center",
  },
});

export function CoomingSoonList({ soonData }) {
  return (
    <ScrollView>
      {soonData.map((value, key) => (
        <>
          <View key={key} style={styles.container}>
            <YoutubePlayer
              height={300}
              width={500}
              play={false}
              videoId={value.videoID}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {value.title} / {value.type}{" "}
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{value.description}</Text>
              <Text style={styles.date}>
                {" "}
                Fecha de estreno: {value.premiereDate}{" "}
              </Text>
            </View>
          </View>
        </>
      ))}
    </ScrollView>
  );
}
