import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, characters }) => {
  //   console.log("dasdasd0", characters);
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        {title}
        {characters?.length}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={characters}
        keyExtractor={(character) => character.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Character-Details", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
  },
});

export default ResultsList;
