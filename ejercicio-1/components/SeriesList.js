import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
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
export function SeriesList({ swiperdata, seriesData }) {
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
      <ScrollView style={{ width: 550 }}>
        {seriesData.map((value, key) => (
          <View
            key={key}
            style={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Text style={styles.categoryTitle}>{value.category}</Text>
            <View>
              {value.data.map((value, key) => (
                <View style={styles.listContainer} key={key}>
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
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
