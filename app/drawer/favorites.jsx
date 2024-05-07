import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Favorites = () => {

  return (
    <SafeAreaView className="">
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

        {/* header */}

        <View className="mt-6 border-b border-b-[#3333]">
          <View className="flex-row mx-12 justify-between items-center pb-3">
            <Text className="text-[16px] font-bold text-primary">Restaurants</Text>
            <Text className="text-[16px] font-bold">shops</Text>
          </View>
          <View className="border-2 bg-primary border-primary rounded-2xl w-[120px] ml-8 "></View>


        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Favorites;
