import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <View>
      <Text className="text-3xl ">Home</Text>
        <Text className="text-sm text-white">Rajia Fashion</Text>
        <View className="ml-2">
          <AntDesign name="hearto" size={24} color="black" />
          <Feather name="shopping-bag" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default index;
