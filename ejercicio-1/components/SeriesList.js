import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
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
    marginVertical: 15,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  categoryTitle: {
    marginVertical: 18,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "silver",
    width: "100%",
    textAlign: "center",
  },
});
export function SeriesList({ swiperdata, seriesData, navigation }) {
  const { setSerieData } = useDataContext();

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
      </View>
      <ScrollView style={{ width: "100%" }}>
        {seriesData.map((value1, key) => (
          <View
            key={key}
            style={{ alignItems: "flex-start", justifyContent: "space-around" }}
          >
            <Text style={styles.categoryTitle}>{value1.category}</Text>
            <View>
              {value1.data.map((value, key) => (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() => {
                    setSerieData({
                      category: value1.category,
                      data: {
                        title: value.title,
                        image: value.image,
                        seasons: value.description,
                        trailer: value.trailer,
                      },
                    });
                    navigation.navigate("PreviewSeries");
                  }}
                >
                  <View style={styles.listContainer}>
                    <Image style={styles.imageList} source={value.image} />
                    <View
                      style={{
                        marginLeft: 50,
                        marginVertical: 20,
                        width: 100,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginBottom: 20,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {value.title}
                      </Text>
                      <Text>* {value.description}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
