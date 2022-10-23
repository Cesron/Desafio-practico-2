import * as eva from "@eva-design/eva";
import { Picker } from "@react-native-community/picker";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const cities = [
  "Aguilares",
  "Apopa",
  "Ayutuxtepeque",
  "Ciudad Delgado",
  "Cojutepeque",
  "Cuscatancingo",
  "El Paisnal",
  "Guazapa",
  "Ilopango",
  "Mejicanos",
  "Nejapa",
  "Panchimalco",
  "Rosario de Mora",
  "San Marcos",
  "San Martín",
  "San Salvador",
  "Santiago Texacuangos",
  "Santo Tomás",
  "Soyapango",
  "Tonacatepeque",
];

export default function App() {
  const [city, setCity] = useState("");
  const [api, setApi] = useState(false);
  const [data, setdata] = useState({
    weather: [{}],
    main: {},
    wind: {},
  });

  useEffect(() => {
    const FetchApi = async () => {
      if (api) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},sv&lang=es&units=metric&appid=b28d91f37e2bcbc1c82fa5af5ca89c56`;
        try {
          const response = await fetch(url).then((response) => response.json());
          //console.log(response);
          setdata(response);
          setApi(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    FetchApi();
  }, [api, setApi, setdata, city]);

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <Picker
          selectedValue={city}
          onValueChange={(value) => {
            setCity(value);
            setApi(true);
          }}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione una ciudad" value="" />
          {cities.map((value, key) => (
            <Picker.Item key={key} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.title} category="h1">
          {city}
        </Text>
        <Image
          style={styles.logo}
          source={{
            uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          }}
        />
        <Text category="h2" style={styles.data}>
          {data.weather[0].description}
        </Text>
        <View style={styles.temp}>
          <Image source={require("./assets/temperature.png")} />
          <Text category="h1">{data.main.temp}°</Text>
        </View>
        <Text category="h6" style={styles.data}>
          Máximo: {data.main.temp_min}° Mínimo: {data.main.temp_max}°
        </Text>
        <Text category="h6" style={styles.data}>
          Humedad: {data.main.humidity}%
        </Text>
        <Text category="h6" style={styles.data}>
          Viento: {data.wind.speed} Km/h
        </Text>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  picker: {
    width: "100%",
    backgroundColor: "#1a2138",
    color: "white",
  },
  title: {
    marginTop: 15,
    textAlign: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  data: {
    marginBottom: 20,
  },
  temp: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
