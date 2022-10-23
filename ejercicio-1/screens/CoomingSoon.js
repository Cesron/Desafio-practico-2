import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CoomingSoonList } from "../components";

const soonData = [
  {
    videoID: "RgJ-jvkURig",
    title: "Amigo",
    type: "Pelicula",
    description:
      "Basada en la serie de libros best-seller de Bernard Waber.Cuando la familia Primm (Constance Wu, Scoot McNairy, Winslow Fegley) se traslada a la ciudad de Nueva York, su joven hijo Josh lucha por adaptarse a su nueva escuela y a sus nuevos amigos. Todo cambia cuando descubre a un cocodrilo cantante que vive en el ático de su nueva casa al que le encantan los baños, el caviar y la buena música. Los dos se hacen amigos rápidamente, pero cuando la existencia de Lilo se ve amenazada por el malvado vecino Mr. Grumps (Brett Gelman), los Primm deben unirse con el carismático dueño de Lilo, Héctor P. Valenti (Javier Bardem), para demostrarle al mundo que la familia puede venir de los lugares más inesperados y que no hay nada malo en un gran cocodrilo cantante con una gran personalidad.",
    premiereDate: "21 de Octubre de 2022",
  },
  {
    videoID: "utcjR0xzj0M",
    title: "La piel del tambor",
    type: "Pelicula",
    description:
      "Un pirata informático irrumpe en el ordenador personal del Papa para comunicarle que se están produciendo una serie de muertes repentinas en una pequeña iglesia de Sevilla (España). El sacerdote Lorenzo Quart es enviado por El Vaticano para que investigue y descubra quién es ese hacker.",
    premiereDate: "",
  },
  {
    videoID: "aXGkP-9i2j0",
    title: "The Peripheral",
    type: "Serie",
    description:
      " Chloë Grace Moretz es Fynne Fisher, que intenta mantener unida a toda su familia. Basada en la novela de William Gibson, se sitúa en un futuro postapocalíptico en el que parece que no hay esperanza.",
    premiereDate: "21 de Octubre de 2022",
  },
  {
    videoID: "4PlJ-ISm3Pk",
    title: "Rogue Heroes",
    type: "Serie",
    description:
      "Basada en la novela de Ben Macintyre, es la nueva serie de Steven Knight y cuenta cómo se formó la unidad de Fuerzas Especiales durante la Segunda Guerra Mundial.",
    premiereDate: "30 de octubre",
  },
];

export function CoomingSoon() {
  return (
    <View style={styles.container}>
      <CoomingSoonList soonData={soonData} />
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
