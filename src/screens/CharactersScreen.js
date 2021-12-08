import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import Api from "../api/Api";

const CharactersScreen = ({ navigation, route }) => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = route.params.id;
  console.log(id);

  const getCharacter = async (id) => {
    setIsLoading(true);
    const chara = await Api.get(`character/${id}`);
    console.log("-------------------------------", chara);
    setCharacter(chara.data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (id) {
      getCharacter(id);
    }
  }, [id]);

  // if (!character) {
  //   return null;
  // }

  if (isLoading) {
    return <ActivityIndicator size={40} color="green" />;
  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          zIndex: -1,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        source={require("../../assets/searchBackground.jpg")}
      />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{ uri: character.image }}
          />
          <View style={styles.textStyle}>
            <Text style={styles.textiko}>Name: {character.name}</Text>
            <Text style={styles.textiko}>Status: {character.status}</Text>
            <Text style={styles.textiko}>Specie: {character.species}</Text>
            <Text style={styles.textiko}>Gender: {character.gender} </Text>
            <Text style={styles.textiko}>Origin: {character.origin.name} </Text>
            <Text style={styles.textiko}>
              Location: {character.location.name}{" "}
            </Text>
            <Text
              style={styles.link}
              onPress={() => {
                Linking.openURL(
                  "https://www.youtube.com/watch?v=qtdCIs6JdXg&list=PLnB5enXU4M7U9b3DN0VKeKJDbH4pbYaVZ"
                );
              }}
            >
              CLICK ME TO BEGIN WATCHING
            </Text>
          </View>
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 100,
    margin: 5,
    alignSelf: "center",
    marginTop: 20,
  },

  textStyle: {
    marginVertical: 40,
  },
  textiko: {
    fontSize: 20,

    alignSelf: "center",
    marginTop: 30,

    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: -6, height: 6 },
    textShadowRadius: 5,

    fontWeight: "900",
  },

  link: {
    color: "#00FF04",
    fontSize: 23,
    fontWeight: "700",
    alignSelf: "center",
    top: 30,
    backgroundColor: "#FF00E1",
    borderWidth: 4,
    borderColor: "#00FF04",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default CharactersScreen;
