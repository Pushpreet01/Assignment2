import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityTab from './citiesPage';

const Tab = createBottomTabNavigator();
// Leftover from first attempts at changing header color based on city. Don't think its currently needed. -Daetan
interface HomeScreenProps {
  setCurrentCity: (city: string) => void;
}

export default function HomeScreen({ setCurrentCity }: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to My New App</Text>

      {/* Bottom Tab Navigator */}
      <View style={styles.tabContainer}>
        <Tab.Navigator screenOptions={{ tabBarStyle: styles.container }}>
          <Tab.Screen name="Calgary">
            {() => (
              <CityTab
                city="Calgary"
                link="https://www.calgary.ca/home.html"
                info="Calgary is known for the annual Calgary Stampede, its proximity to the Rocky Mountains, and as an energy hub in Canada."
                image="https://images.unsplash.com/photo-1597288253816-54ea162cdf0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                setCurrentCity={setCurrentCity}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Edmonton">
            {() => (
              <CityTab
                city="Edmonton"
                link="https://www.edmonton.ca/"
                info="Edmonton is the capital of Alberta, home to the largest mall in North America, and known as ‘Canada’s Festival City’."
                image="https://images.unsplash.com/photo-1574541647051-099cedfb7f8f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                setCurrentCity={setCurrentCity}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  tabContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
