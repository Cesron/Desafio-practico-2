import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { useDataContext } from "../context/DataContext";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
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
  categoryTitle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export function MoviesList({ swiperdata, moviesData }) {
  const { movieData, setMovieData } = useDataContext();

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
            </View>
          ))}
        </Swiper>
        <Text>{JSON.stringify(movieData)}</Text>
      </View>
      <ScrollView style={{ padding: 15 }}>
        {moviesData.map((value1, key) => (
          <View key={key} style={{ alignItems: "center" }}>
            <Text style={styles.categoryTitle}>{value1.category}</Text>
            <ScrollView horizontal>
              {value1.data.map((value, key) => (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() =>
                    setMovieData({
                      category: value1.category,
                      data: {
                        title: value.title,
                        image: value.image,
                        description: value.description,
                        trailer: value.trailer,
                      },
                    })
                  }
                >
                  <View style={styles.listContainer}>
                    <Image style={styles.imageList} source={value.image} />
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
