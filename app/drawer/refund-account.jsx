import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";

const RefundAccount = () => {
    return (
        <SafeAreaView>
            <ScrollView>
            <View>
                <View className="bg-primary h-[120px] relative">
                    <View className="flex flex-row justify-between items-center mt-4 mx-[14px]">
                        <View className="flex flex-row gap-5">
                                <FontAwesome6 onPress={() => {
                                    router.push("/");
                                }} name="xmark" size={22} color="white" />
                            <Text className="text-[18px] font-bold text-white">Refund account</Text>
                        </View>
                        <AntDesign name="setting" size={22} color="white" />
                    </View>
                </View>
                <View className="bg-white w-[92%] m-auto absolute -bottom-12 left-4 h-[100px] p-4 rounded-xl shadow-2xl">
                    <Text className="mb-[15px]">Available balance</Text>
                    <Text className="text-[20px] font-bold">TK 0</Text>
                </View>
            </View>
                {/* primary payment */}
                <View className="flex flex-row gap-3 mt-[70px] mx-[14px]">
                    <AntDesign name="folder1" size={22} color="#F5267E" className="mr-3" />
                    <Text className="text-[16px] font-bold">Primary payment method</Text>
                </View>

                {/* Cart */}

                <View className="bg-[#f526800c] flex flex-row justify-center items-center gap-2 px-8 py-4 rounded-xl mx-[14px] mt-4 border border-[#F5267E]">
                    <View>
                        <Text>Save a payment method at checkout and it'll show up there</Text>
                        <Text>Back To Home</Text>
                    </View>
                    <AntDesign name="folderopen" size={22} color="#F5267E" className="mr-3" />
                </View>

              {/* Recent */}
                <View className="mx-[14px] flex flex-row justify-between items-center mt-6">
                    <View className="flex flex-row items-center gap-2">
                    <FontAwesome6 name="arrow-right-arrow-left" size={24} color="#F5267E" />
                    <Text className="text-[16px] font-bold">Recent activities</Text>
                </View>
                    <Text className="font-bold text-[#F5267E]">View all</Text>
              </View>

              {/* refund cart */}

                <View className="mx-[14px] mt-5">
                {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
                    {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
                    {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
                    {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
                    {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
                    {/* cart */}
                <View className="flex flex-row justify-between items-center border-b border-b-[#3333] py-2 px-1 border-l border-l-[#3333] mb-4">

                <View className="flex flex-row items-center gap-3">
                <MaterialCommunityIcons name="notebook" size={18} color="black" />

                 <View>
                    <View className="flex flex-row items-center">
                        <Text className="text-[14px] font-bold mr-2">Order</Text>
                        <Text>4/19/23</Text>
                    </View>
                    <Text>Ka Te Kacchi Express - Aftabnagar</Text>
                 </View>
                </View>

                <Text> - TK 267</Text>

                </View>
              </View>


            </ScrollView>
            <StatusBar backgroundColor={"#D00764"} barStyle={"light-content"} />
        </SafeAreaView>
    );
};

export default RefundAccount;
