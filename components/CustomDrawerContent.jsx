import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {
    Feather,
    AntDesign,
    MaterialIcons,
    Ionicons,
    FontAwesome5,
    Foundation
} from "@expo/vector-icons";

import { router, usePathname } from "expo-router";


const CustomDrawerContent = (props) => {
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <DrawerContentScrollView {...props}>
            <View className="h-[220px] bg-primary flex justify-between p-5">
                <Image
                    source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
                    width={50}
                    height={50}
                    style={styles.userImg}
                />
                <Text className="text-[18px] font-bold text-white">Abdur Rahim</Text>
            </View>
            <TouchableOpacity onPress={() => {
                router.push("/drawer/refund-account");
            }} className='flex flex-row justify-between p-3 border-b-[1px] border-b-gray-200'>
                <View>
                    <Text className="text-[15px] font-bold pb-3">Refund  account</Text>
                    <Text className="text-gray-600">Balance and payment methods</Text>
                </View>
                <Text className="bg-[#FAD9E7] text-[13px] h-[22px] rounded-lg text-primary font-bold px-2">
                    Tk 02323234
                </Text>
            </TouchableOpacity>
            <DrawerItem
                icon={({ color, size }) => (
                    <FontAwesome5 
                    name="chess-king"
                    size={size}
                        color={pathname == "/feed" ? "#fff" : "#5C1D94"} 
                    />
                )}
                label={"Become a pandapro"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/feed" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/drawer/become-pandapro");
                }}

            />
            <DrawerItem
                icon={({ color, size }) => (
                <MaterialIcons
                    name="local-offer"
                        size={size}
                        color={pathname == "/profile" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Vouchers & offers"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/profile" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/drawer/vouchers-and-offers");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <MaterialIcons
                        name="favorite-outline"
                        size={size}
                        color={pathname == "/favourites" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Favourites"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/favourites" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/favourites" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/drawer/favorites");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <MaterialIcons
                        name="border-color"
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Orders & reordering"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <AntDesign
                        name="user"
                        size={size}
                        color={pathname == "/profile" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"View profile"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons
                        name="location-outline"
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Addresses"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                
                    <Foundation 
                       name="trophy"
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Panda rewards"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons
                       name="help-circle-outline"
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Help center"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Ionicons
                       name="business"
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"foodpanda for business"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                  
                    <AntDesign 
                        name="gift" 
                        size={size}
                        color={pathname == "/settings" ? "#fff" : "#F6267E"}
                    />
                )}
                label={"Invite friends"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                onPress={() => {
                    router.push("/settings");
                }}
            />
            <View className="border-t-[1px] border-t-gray-200 py-5 pl-5">
                <Text className="py-3">Setting</Text>
                <Text className="py-3">Terms & conditions / Privacy</Text>
                <Text className="py-3">Logout</Text>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    navItemLabel: {
        marginLeft: 0,
        fontSize: 14,
        fontWeight: '400',
        color: "#ccc"
    },
    userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    userImg: {
        borderRadius: 40,
    },
    userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
});
