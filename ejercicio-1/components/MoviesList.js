import {
  View,
  Text,
  ScrollView,
  SectionList,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  swiperContainer: {
    padding: 25,
    maxHeight: "35%",
    marginTop: 35,
  },
  imageSwiper: {
    width: "80%",
    height: "80%",
    flexGrow: 2,
  },

  listContainer: {
    width: 500,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },

  imageList: {
    width: "30%",
    height: 200,
    marginLeft: 60,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DataImg = [
  {
    name: "Prueba",
    data: ["Spiderman", "Avengers", "Asustados"],
    image: "require(./images/aladdin.jpg)",
  },
  {
    name: "Hola",
    data: ["El hombre arana", "Vengadores", "Hola que hace"],
    image: "require(./images/aladdin.jpg)",
  },
];

/* const Item = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
); */

export function MoviesList() {
  return (
    <>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay
          autoplayTimeout={3.5}
        >
          <View style={styles.slide1}>
            <Image
              style={styles.imageSwiper}
              source={require("../images/formadelagua.jpg")}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={styles.imageSwiper}
              source={require("../images/interstelar.jpg")}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={styles.imageSwiper}
              source={require("../images/int_furiaTitanes_1000px_horizontal2.jpg")}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={styles.imageSwiper}
              source={require("../images/malditos-vecinos-2-horizontal-1_b1fw.jpg")}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={styles.imageSwiper}
              source={require("../images/int_furiaTitanes_1000px_horizontal2.jpg")}
            />
          </View>
        </Swiper>
      </View>
      <ScrollView>
        {/* <SectionList
          sections={DataImg}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { name } }) => <Text>{name}</Text>}
        />
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        <Text>Comedia</Text>
        <View style={styles.listContainer}>
          <View></View>
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
        </View>
        <Text>Comedia</Text>
        <View style={styles.listContainer}>
          <View></View>
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
        </View>
        <Text>Comedia</Text>
        <View style={styles.listContainer}>
          <View></View>
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
          <Image
            style={styles.imageList}
            source={require("../images/Vformadelagua.jpg")}
          />
        </View>
      </ScrollView>
    </>
  );
}
