import React from 'react'
import { Tabs } from 'expo-router'

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="calgary" options={{title:"Calgary"}}/>
        <Tabs.Screen name="edmonton" options={{title:"Edmonton"}}/>
    </Tabs>
  );
};

export default TabRoot;