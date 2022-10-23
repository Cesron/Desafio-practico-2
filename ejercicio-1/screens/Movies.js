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
        trailer: "_L0DMAFBEjs",
      },
      {
        title: "hola 2",
        image: require("../images/deadpool.jpg"),
        description: "test 2",
        trailer: "0JnRdfiUMa8",
      },
      {
        title: "hola",
        image: require("../images/americanpie.jpg"),
        description: "test 3",
        trailer: "iUZ3Yxok6N8",
      },
      {
        title: "hola",
        image: require("../images/Supercool.webp"),
        description: "description",
        trailer: "w8BBPZsMFIg",
      },
      {
        title: "hola",
        image: require("../images/poweraustin.jpg"),
        description: "description",
        trailer: "5vsANcS4Ml8",
      },
      {
        title: "hola",
        image: require("../images/pasoayer.webp"),
        description: "description",
        trailer: "wnNgGp1KVWQ",
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
        trailer: "TcMBFSGVi1c ",
      },
      {
        title: "hola",
        image: require("../images/venom.jpg"),
        description: "description",
        trailer: "u9Mv98Gr5pY",
      },
      {
        title: "hola",
        image: require("../images/fyf.jpg"),
        description: "description",
        trailer: "t3DpuQrBivU",
      },
      {
        title: "hola",
        image: require("../images/hasta_el_ultimo_hombre-cartel-7198.jpg"),
        description: "description",
        trailer: "HpW6qzO4LHI",
      },
      {
        title: "hola",
        image: require("../images/interstelar.jpg"),
        description: "description",
        trailer: "zSWdZVtXT7E",
      },
      {
        title: "hola",
        image: require("../images/int_furiaTitanes_1000px_horizontal2.jpg"),
        description: "description",
        trailer: "DDtATKD2cP8",
      },
    ],
  },
  {
    category: "Romance",
    data: [
      {
        title: "La teoria del todo",
        image: require("../images/002_m.jpg"),
        description: "description",
        trailer: "pOsMMutM8C0",
      },
      {
        title: "Antes de ti",
        image: require("../images/antesdeti.jpg"),
        description: "description",
        trailer: "PQ0RIeH__hI",
      },
      {
        title: "Como si fuera la primera vez",
        image: require("../images/primeravez.jpg"),
        description: "description",
        trailer: "lKXgf7BUQnE",
      },
      {
        title: "Lo mejor de mi",
        image: require("../images/lo_mejor_de_mi-cartel-5819.jpg"),
        description: "description",
        trailer: "OJRKTaXhbJs",
      },
      {
        title: "Recuerdame",
        image: require("../images/20098981.jpg"),
        description: "description",
        trailer: "Kl0IhOA3BIE",
      },
      {
        title: "La casa del lago",
        image: require("../images/casalago.jpg"),
        description: "description",
        trailer: "fQ5lPbssHS8",
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
