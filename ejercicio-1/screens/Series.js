import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SeriesList } from "../components";

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
const seriesData = [
  {
    category: "Comedia",
    data: [
      {
        title: "Mr. Bean",
        image: require("../images/serieC1.jpg"),
        description: "5 temporadas",
        trailer: "hSxLUd8aly4",
      },
      {
        title: "Two and a half man",
        image: require("../images/serieC2.jpg"),
        description: "3 temporadas",
        trailer: "097pUW0L_Xc",
      },
      {
        title: "Friends",
        image: require("../images/serieC3.jpg"),
        description: "6 temporadas",
        trailer: "LTpmw0Ac6Zs",
      },
      {
        title: "The Big Bang Theory",
        image: require("../images/serieC4.jpg"),
        description: "8 temporadas",
        trailer: "WBb3fojgW0Q",
      },
      {
        title: "Los Simpsons",
        image: require("../images/serieC5.jpg"),
        description: "4 temporadas",
        trailer: "HRV6tMR-SSs",
      },
      {
        title: "Glee",
        image: require("../images/serieC6.jpg"),
        description: "2 temporadas",
        trailer: "aAkuBv46HJA",
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
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/venom.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/fyf.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/hasta_el_ultimo_hombre-cartel-7198.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/interstelar.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/int_furiaTitanes_1000px_horizontal2.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
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
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/antesdeti.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/primeravez.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/lo_mejor_de_mi-cartel-5819.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/20098981.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
      {
        title: "hola",
        image: require("../images/casalago.jpg"),
        description: "description",
        trailer: "aAkuBv46HJA",
      },
    ],
  },
];
export function Series({ navigation }) {
  return (
    <View style={styles.container}>
      <SeriesList
        swiperdata={DataImg}
        seriesData={seriesData}
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
