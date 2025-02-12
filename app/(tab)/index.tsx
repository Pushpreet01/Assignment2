import { View, Text } from 'react-native'
import City from '@/components/city'
import React from 'react'

const Index = () => {
  return (
    <City
    city="Calgary"
    imageUrl={require("./assets/calgary.png")}
    link="https://www.calgary.ca/home.html"
    info="Calgary is known for the annual Calgary Stampede, its proximity to the Rocky Mountains, and as an energy hub in Canada."
  />
  );
};

export default Index;