import { View, Text, Button, TouchableOpacity, StatusBar, TextInput } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
const Page = () => {
  return (
    <SafeAreaView>
      <View>
        <View className="bg-primary px-3 pt-[10px] pb-[15px] flex gap-[13px] shadow-2xl">
          {/* location and cart */}
        <View className="flex flex-row justify-between ">
          <View className="flex flex-row justify-center items-center gap-4">
            <MaterialCommunityIcons name="forwardburger" size={28} color="white" />
            <View className="text-white">
                <Text className="text-[16px] font-semibold text-white">Mohakhli, Dhaka, BD-2001</Text>
              <Text className="text-white text-[13px]">Dhaka</Text>
            </View>
          </View>
          <View className="flex flex-row justify-center items-center gap-3">
            <AntDesign name="hearto" size={18} color="white" />
            <AntDesign name="shoppingcart" size={20} color="white" />
          </View>
        </View>
        {/* Input field */}

          <View className="bg-white rounded-[30px] py-[7px] px-4">
            <View className="flex flex-row items-center ml-4 gap-3">
            <AntDesign name="search1" size={22} color="gray" />
            <TextInput
              className="text-secondary"
             placeholder="Search for shops & restaurants"
            />
            </View>
        </View>

        </View>
      </View>
      <StatusBar backgroundColor={"#FF2B85"} barStyle={"light-content"}/>
    </SafeAreaView>
  );
};

export default Page;
