import React from "react";
import { Stack } from "expo-router";

const DrawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="favorites" options={{headerShown: false}}/>
      <Stack.Screen name="refund-account" options={{ headerShown: false }} />
      <Stack.Screen name="become-pandapro" options={{ headerShown: false }} />            
      <Stack.Screen name="vouchers-and-offers" options={{ headerShown: false }} />            
      <Stack.Screen name="order-and-reordering" options={{ headerShown: false }} />            
      <Stack.Screen name="addresses" options={{ headerShown: false }} />            
      <Stack.Screen name="panda-rewards" options={{ headerShown: false }} />            
      <Stack.Screen name="invite-friends" options={{ headerShown: false }} />            
    </Stack>
  );
};

export default DrawerLayout;
