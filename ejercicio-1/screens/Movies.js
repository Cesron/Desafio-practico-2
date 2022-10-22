import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Preview, MoviesList } from "../components";

const DataImg = [
  {
    name: "Prueba",
    data: ["Spiderman", "Avengers", "Asustados"],
    image: require("../images/venom.jpg"),
  },
  {
    name: "Hola",
    data: ["El hombre arana", "Vengadores", "Hola que hace"],
    image: require("../images/engame.jpg"),
  },
];

const moviesData = [
  {
    category: "Comedia",
    data: [
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
    ],
  },
  {
    category: "Acción",
    data: [
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
    ],
  },
  {
    category: "Romance",
    data: [
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/engame.jpg"),
        description: "description",
      },
    ],
  },
];

export function Movies() {
  return (
    <View style={styles.container}>
      <MoviesList swiperdata={DataImg} moviesData={moviesData} />
      <Preview />
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
