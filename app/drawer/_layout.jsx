import React from "react";
import { Stack } from "expo-router";

const DrawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="favorites" options={{headerShown: false}}/>
      <Stack.Screen name="refund-account" options={{ headerShown: false }} />
      <Stack.Screen name="become-pandapro" options={{ headerShown: false }} />            
      <Stack.Screen name="vouchers-and-offers" options={{ headerShown: false }} />            
    </Stack>
  );
};

export default DrawerLayout;
