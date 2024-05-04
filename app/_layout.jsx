import React from "react";
import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";


const RootLayout = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
          drawerStyle: {
            width: "90%"
          },
          headerShown: false
        }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'overview',
            }}
          />
          <Drawer.Screen
            name="drawer"
            options={{
              drawerLabel: 'Home',
              title: 'overview',
              headerShown: false
            }}

          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
};

export default RootLayout;
