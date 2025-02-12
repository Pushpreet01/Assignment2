import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

interface CityProps {
  city: string;
  imageUrl: string;
  link: string;
  info: string;
}

const City: React.FC<CityProps> = ({ city, imageUrl, link, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{city}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.linkText}>Go to City Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  linkText: {
    fontSize: 18,
    color: "blue",
    marginVertical: 10,
  },
});

export default City;
