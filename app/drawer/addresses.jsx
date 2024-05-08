import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const Addresses = () => {
  return (
    <SafeAreaView>
          <View className="bg-white px-4 flex-row items-center py-4">
              <Entypo name="cross" size={30} color="#D00764" />
              <Text className="text-[18px] font-bold ml-4">Addresses</Text>
          </View>
          <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
    </SafeAreaView>
  );
};

export default Addresses;
