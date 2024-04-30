import { View, Text } from "react-native";
import React from "react";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerLayout = () => {
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer>
                    <Drawer.Screen name="view-profile" options={{ 
                        drawerLabel: "View Profile", 
                        title: "overview" 
                        }} 
                    />
                </Drawer>
            </GestureHandlerRootView>
        </>
    );
};

export default DrawerLayout;
