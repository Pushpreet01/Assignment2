import { View, Text } from 'react-native'
import Signin from "@/components/signin";
import React, { useState } from 'react'

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
  
  return (
    <View>
    {isLoggedIn ? (
        <Text>Welcome, {username}!</Text>
      ):(

        <Signin       
        isLoginBoolean={setIsLoggedIn} 
        username={username} 
        setUsername={setUsername}/>
      )}    
    </View>
  );
};

export default Index;