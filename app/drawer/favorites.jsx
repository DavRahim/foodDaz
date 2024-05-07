import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import refer from "../../assets/refer.jpg"

const Favorites = () => {

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="mx-[14px]">
        {/* header */}
        <View className="flex-row justify-between items-center py-3">
          <View className="flex-row items-center">
            <AntDesign name="arrowleft" size={24} color="#D00764" />
          <Text className="ml-5 text-[18px] font-bold">Favorites</Text>
          </View>
          <View className="relative">
            <Ionicons name="bag-handle-outline" size={24} color="#D00764" />
          </View>
          <Text className="absolute top-6 right-0 bg-primary px-[5px] text-[12px] rounded-full text-white font-bold">2</Text>
        </View>

        {/* header Restaurants*/}

        <View className="mt-6 border-b border-b-[#3333]">
          <View className="flex-row mx-12 justify-between items-center pb-3">
            <Text className="text-[16px] font-bold text-primary">Restaurants</Text>
            <Text className="text-[16px] font-bold">shops</Text>
          </View>
          <View className="border-2 bg-primary border-primary rounded-2xl w-[120px] ml-8 "></View>


        </View>

        <View className="flex-row mt-5 items-center">
          <Text className=" px-[14px] py-[10px] mr-5 rounded-3xl bg-primary text-white font-bold">Delivery</Text>
          <Text className=" px-[14px] py-[10px] mr-5 rounded-3xl border border-[#3333] font-bold">Pick-Up</Text>
        </View>

        <View className="flex-1 mt-52 items-center">
          <Image
            source={refer}
            className="w-[100px] h-[100px]"
          />
          <Text className="text-[22px] font-bold mt-3">
            No favourites saved
          </Text>
          <Text className="text-center text-[#333333c2] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis et necessitatibus quas .
          </Text>
          <TouchableOpacity className="mt-5 bg-primary py-[5px] px-3 rounded-md">
            <Text className="text-white font-bold">Let's find some favourites</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Favorites;
