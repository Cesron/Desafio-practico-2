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
    width: 100,
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: 5,
  },

  imageList: {
    width: "100%",
    height: 200,
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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

/* const Item = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
); */

export function MoviesList({ swiperdata, moviesData }) {
  return (
    <>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay
          autoplayTimeout={3.5}
        >
          {swiperdata.map((value, key) => (
            <View key={key} style={styles.slide1}>
              <Image style={styles.imageSwiper} source={value.image} />
              <Text>{value.image}</Text>
            </View>
          ))}
        </Swiper>
      </View>
      <ScrollView>
        {moviesData.map((value, key) => (
          <View key={key}>
            <Text>{value.category}</Text>
            <ScrollView horizontal>
              {value.data.map((value, key) => (
                <View style={styles.listContainer} key={key}>
                  <Image style={styles.imageList} source={value.image} />
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
