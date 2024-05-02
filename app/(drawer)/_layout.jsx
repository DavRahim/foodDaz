import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/CustomDrawerContent";

const DrawerLayout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
              <Drawer.Screen name="favorites" options={{ headerShown: false, drawerLabel: 'Favorites', }} />
              <Drawer.Screen name="vouchers-and-offers" />
          </Drawer>
      </GestureHandlerRootView>
  );
};

export default DrawerLayout;
