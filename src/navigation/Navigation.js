import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersScreen from "../screens/CharactersScreen";

import { Text, ScrollView, Stylesheet } from "react-native";
import HomeScreen from "../screens/homescreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Character-Details" component={CharactersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
