import { View, Text } from 'react-native'
import City from '@/components/city'
import React from 'react'

const Index = () => {
  return (
    <City
    city="Calgary"
    imageUrl="https://images.unsplash.com/photo-1597288253816-54ea162cdf0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    link="https://www.calgary.ca/home.html"
    info="Calgary is known for the annual Calgary Stampede, its proximity to the Rocky Mountains, and as an energy hub in Canada."
  />
  );
};

export default Index;