import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MoviesList } from "../components";

const DataImg = [
  {
    image: require("../images/formadelagua.jpg"),
  },
  {
    image: require("../images/malditos-vecinos-2-horizontal-1_b1fw.jpg"),
  },
  {
    image: require("../images/interstelar.jpg"),
  },
];

const moviesData = [
  {
    category: "Comedia",
    data: [
      {
        title: "hola",
        image: require("../images/AlertaRoja.jpg"),
        description: "test",
      },
      {
        title: "hola 2",
        image: require("../images/deadpool.jpg"),
        description: "test 2",
      },
      {
        title: "hola",
        image: require("../images/americanpie.jpg"),
        description: "test 3",
      },
      {
        title: "hola",
        image: require("../images/Supercool.webp"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/poweraustin.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/pasoayer.webp"),
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
        image: require("../images/venom.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/fyf.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/hasta_el_ultimo_hombre-cartel-7198.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/interstelar.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/int_furiaTitanes_1000px_horizontal2.jpg"),
        description: "description",
      },
    ],
  },
  {
    category: "Romance",
    data: [
      {
        title: "hola",
        image: require("../images/002_m.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/antesdeti.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/primeravez.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/lo_mejor_de_mi-cartel-5819.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/20098981.jpg"),
        description: "description",
      },
      {
        title: "hola",
        image: require("../images/casalago.jpg"),
        description: "description",
      },
    ],
  },
];

export function Movies({ navigation }) {
  return (
    <View style={styles.container}>
      <MoviesList
        swiperdata={DataImg}
        moviesData={moviesData}
        navigation={navigation}
      />
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
