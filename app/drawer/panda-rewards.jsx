import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import rew from "../../assets/rew/rew.png"

const PandaRewards = () => {
  return (
    <SafeAreaView>
        <View className="bg-primary pb-32 relative">
        <View className="flex-row justify-between items-center p-3">
            <View className="w-[30px] h-[30px] bg-white rounded-full py-1 px-1">
                      <AntDesign name="arrowleft" size={20} color="#D00764" />
            </View>
                  <View className="w-[30px] h-[30px] bg-white rounded-full py-1 pl-[6]">
                      <FontAwesome name="question-circle-o" size={20} color="#D00764" />
            </View>
        </View>
        <Image
          source={rew}
          className="mx-auto"
         />
          </View>
          <View className="absolute bottom-4 left-3 w-[95%] bg-white pb-4 pt-5 rounded-2xl">
            <Text className="text-center text-[15px] font-semibold">
                Points
            </Text>
            <Text className="text-center mt-2">
                  <MaterialCommunityIcons name="star-circle-outline" size={24} color="black" />
                  <Text className="text-[25px] font-bold">0</Text>
                  <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
            </Text>
            <Text className="text-center text-[16px] font-bold text-primary mt-4">
                How to earn points
            </Text>
          </View>
          <StatusBar backgroundColor={"#D00764"} barStyle={"light-content"}/>
    </SafeAreaView>
  );
};

export default PandaRewards;
