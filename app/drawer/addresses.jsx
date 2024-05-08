import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Addresses = () => {
    return (
        <SafeAreaView>
            <View className="bg-white px-4 flex-row items-center py-4">
                <Entypo name="cross" size={30} color="#D00764" />
                <Text className="text-[18px] font-bold ml-4">Addresses</Text>
            </View>
            <ScrollView className="my-2">
                {/* cart */}
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
                <View className="flex-row px-3 py-3 border-b border-b-[#3333] ">
                    <Ionicons name="location-outline" size={25} color="#D00764" />
                    <View className="ml-2 w-[300px]">
                        <Text className="text-[14px] font-semibold">
                            Aftab Nagar Main Road, Dhaka, Bangla...
                        </Text>
                        <Text>Dhaka</Text>
                        <Text>Note to rider: House No 33, Block B, Main,...</Text>
                    </View>
                    <View className="flex-row">
                        <EvilIcons name="pencil" size={30} color="#D00764" />
                        <MaterialIcons name="delete" size={24} color="#D00764" />
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        </SafeAreaView>
    );
};

export default Addresses;
