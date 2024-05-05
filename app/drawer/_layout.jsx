import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";

const DrawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="favorites" options={{headerShown: false}}/>
      <Stack.Screen name="vouchers-and-offers"/>
      <Stack.Screen name="refund-account" options={{ headerShown: false }} />
      <Stack.Screen name="become-pandapro" options={{ headerShown: false }} />
    </Stack>
  );
};

export default DrawerLayout;
