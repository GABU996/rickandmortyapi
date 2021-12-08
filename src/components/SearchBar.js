import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => (
  <View style={styles.backgroundStyle}>
    <MaterialIcons
      style={{ margin: 3 }}
      name="location-searching"
      size={30}
      color="black"
    />
    <TextInput
      style={styles.inputStyle}
      placeholder="Search Characters"
      value={searchTerm}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onSearchTermChange}
      onEndEditing={onSearchTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#7AF470",
    height: 50,
    marginHorizontal: 5,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
  },

  inputStyle: {
    flex: 1,
    borderRadius: 6,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default SearchBar;
