import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/signInPage";
import HomeScreen from "../components/homePage";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [currentCity, setCurrentCity] = useState("");

  return (
    <Stack.Navigator screenOptions={{ headerStyle: styles.container }}>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ headerTintColor: "white" }}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerTintColor: currentCity === "Calgary" ? "white" : currentCity === "Edmonton" ? "#4169E1" : "white", headerTitleStyle: styles.headerTitle,
        }} 
      >
        {props => <HomeScreen {...props} setCurrentCity={setCurrentCity} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "orange",
  },
  headerTitle: {
    fontWeight: "bold",
  },
});