import { View, Text } from 'react-native'
import City from '@/components/city'
import React from 'react'

const Edmonton = () => {
  return (
    <City
    city="Edmonton"
    imageUrl={require("./assets/edmonton.png")}
    link="https://www.edmonton.ca/"
    info="Edmonton is the capital of Alberta, home to the largest mall in North America, and known as ‘Canada’s Festival City’."
    />
  );
};

export default Edmonton;