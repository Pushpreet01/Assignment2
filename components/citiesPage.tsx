import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Linking, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

interface CityTabProps {
  city: string;
  link: string;
  info: string;
  image: string;
  setCurrentCity: (city: string) => void;
}

export default function CityTab({ city, link, info, image, setCurrentCity }: CityTabProps) {
  useFocusEffect(
    React.useCallback(() => {
      setCurrentCity(city);
    }, [city])
  );
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.cityImage} />
      <Button title={`Go to ${city} Page`} onPress={() => Linking.openURL(link)} />
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, },
  infoText: { marginTop: 10, fontSize: 16, color: '#333', },
  cityImage: { width: 300, height: 200, marginVertical: 10, borderRadius: 10, } 
});