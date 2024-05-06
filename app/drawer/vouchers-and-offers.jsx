import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const VouchersAndOffers = () => {
  return (
    <SafeAreaView className="relative">
        <View className="flex flex-row px-3 py-5 bg-white gap-5 border-b-gray-600 absolute top-0 left-0">
        <AntDesign name="arrowleft" size={24} color="#D00764" />
        <Text className="text-[16px] font-bold">Vouchers & Offers</Text>
        </View>
    </SafeAreaView>
  );
};

export default VouchersAndOffers;
