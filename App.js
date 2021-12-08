import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api").then((data) => {
  //     console.log(data);
  //   });
  // }, []);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
};

export default App;
