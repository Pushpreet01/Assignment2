import { View, Text } from 'react-native'
import City from '@/components/city'
import React from 'react'

const Edmonton = () => {
  return (
    <City
    city="Edmonton"
    imageUrl="https://images.unsplash.com/photo-1574541647051-099cedfb7f8f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    link="https://www.edmonton.ca/"
    info="Edmonton is the capital of Alberta, home to the largest mall in North America, and known as ‘Canada’s Festival City’."
    />
  );
};

export default Edmonton;