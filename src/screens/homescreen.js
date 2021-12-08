import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import SearchBar from "../components/SearchBar";

import UseCharacters from "../hooks/UseCharacters";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, characters, errorMessage] = UseCharacters();

  const resultsViaStatus = (status) => {
    return characters.filter((character) => {
      console.log("23123123131", character);
      return character.status === status;
    });
  };

  return (
    <View>
      <Image
        style={{ zIndex: -1, position: "absolute" }}
        source={require("../../assets/splashForApp.jpg")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onSearchTermSubmit={async () => searchApi(searchTerm)}
        />
        {errorMessage ? <Text>{"ჩეპე"}</Text> : null}

        <ResultsList characters={resultsViaStatus("Alive")} title="ALIVE:" />

        <ResultsList characters={resultsViaStatus("Dead")} title="DEAD:" />

        {characters.status === "Unknown" && (
          <ResultsList
            characters={resultsViaStatus("Unknown")}
            title="UNKNOWN:"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
