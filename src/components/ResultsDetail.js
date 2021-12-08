import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image }} />
      <Text style={styles.title}>{result.name}</Text>
      <View style={styles.ViewStyle}>
        <Text style={styles.addinfo}>Specie:{result.species}</Text>
        <Text style={styles.addinfo}>Gender: {result.gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: "bold",
  },

  imageStyle: {
    width: 250,
    height: 170,
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
  },
  addinfo: {
    fontSize: 12,
    margin: 5,
    fontWeight: "bold",
  },
  ViewStyle: {
    flexDirection: "row",
  },
});

export default ResultsDetail;
