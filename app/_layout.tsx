import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{headerShown: false}}/>
      <Stack.Screen name="index" options={{ title: "Welcome" }}/>
    </Stack>
  );
};

export default RootLayout;