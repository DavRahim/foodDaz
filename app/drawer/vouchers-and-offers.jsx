import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VouchersAndOffers = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row px-3 py-5 bg-white gap-5 border-b-gray-600">
        <AntDesign name="arrowleft" size={24} color="#D00764" />
        <Text className="text-[16px] font-bold">Vouchers & Offers</Text>
      </View>
      <ScrollView className="mx-[14px]">
        <View className="bg-white py-4 flex flex-row justify-evenly items-center border border-gray-200 rounded-xl mt-3 ">
          <View className="border-r border-r-gray-200 pr-7">
            <Text className="text-[17px] font-bold text-center">Tk 0</Text>
            <Text> saved this month</Text>
           </View>

          <View className="flex flex-row">
            <AntDesign name="creditcard" size={24} color="#D00764" />
            <Text className="text-[14px] font-bold ml-2 text-primary">Add a Voucher</Text>
           </View>
        </View>

        {/* Short */}

        <View className="flex flex-row my-6 items-center">
          <View className="bg-white flex flex-row border border-[#33333334] mx-2 py-[2px] px-2 rounded-2xl">
            <Text className="pr-1 text-[13px] font-bold text-center">Sort</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
          <View className="bg-primary border border-[#33333334] mx-2 py-[4px] px-2 rounded-2xl">
            <Text className="pr-1 text-[13px] font-bold text-center text-white">Restaurants</Text>
          </View>
          <View className="bg-white border border-[#33333334] mx-2 py-[4px] px-2 rounded-2xl">
            <Text className="pr-1 text-[13px] font-bold text-center">Shop</Text>
          </View>
          <View>
            <Text className="pr-1 text-[13px] font-bold text-center">Clear All</Text>
          </View>
        </View>

        {/* voucher */}
        <View>
          {/* Cart */}
          <View className="bg-white rounded-xl mb-4">
            <View className="flex flex-row items-center px-3 py-[6px] border-t border-x rounded-xl border-[#3333]">
              <MaterialCommunityIcons name="brightness-percent" size={30} color="#D00764" />
              <View className="ml-3">
                <Text>Miss you! Here's TK100 off.</Text>
                <Text> <Text>TK100</Text> <MaterialIcons name="info-outline" size={14} color="#D00764" /> VNR3IRQ9</Text>
              </View>
            </View>
            <View className="border-dashed border-t w-[90%] mx-auto border-[#3333]"></View>
            {/* and */}
            <View className="py-2 px-3 border-b border-x rounded-xl border-[#3333]">
              <View className="flex flex-row items-center">
                <Text className="border px-2 py-[3px] text-[13px] rounded-2xl border-[#3333]">Min. spend Tk300 . <Text className="font-bold text-red-500">Expires on 11 May 20...</Text></Text>
                <Text className="ml-3 font-bold text-primary">Details</Text>
              </View>
            </View>

          </View>
          <View className="bg-white rounded-xl mb-4">
            <View className="flex flex-row items-center px-3 py-[6px] border-t border-x rounded-xl border-[#3333]">
              <MaterialCommunityIcons name="brightness-percent" size={30} color="#D00764" />
              <View className="ml-3">
                <Text>Miss you! Here's TK100 off.</Text>
                <Text> <Text>TK100</Text> <MaterialIcons name="info-outline" size={14} color="#D00764" /> VNR3IRQ9</Text>
              </View>
            </View>
            <View className="border-dashed border-t w-[90%] mx-auto border-[#3333]"></View>
            {/* and */}
            <View className="py-2 px-3 border-b border-x rounded-xl border-[#3333]">
              <View className="flex flex-row items-center">
                <Text className="border px-2 py-[3px] text-[13px] rounded-2xl border-[#3333]">Min. spend Tk300 . <Text className="font-bold text-red-500">Expires on 11 May 20...</Text></Text>
                <Text className="ml-3 font-bold text-primary">Details</Text>
              </View>
            </View>

          </View>
          <View className="bg-white rounded-xl mb-4">
            <View className="flex flex-row items-center px-3 py-[6px] border-t border-x rounded-xl border-[#3333]">
              <MaterialCommunityIcons name="brightness-percent" size={30} color="#D00764" />
              <View className="ml-3">
                <Text>Miss you! Here's TK100 off.</Text>
                <Text> <Text>TK100</Text> <MaterialIcons name="info-outline" size={14} color="#D00764" /> VNR3IRQ9</Text>
              </View>
            </View>
            <View className="border-dashed border-t w-[90%] mx-auto border-[#3333]"></View>
            {/* and */}
            <View className="py-2 px-3 border-b border-x rounded-xl border-[#3333]">
              <View className="flex flex-row items-center">
                <Text className="border px-2 py-[3px] text-[13px] rounded-2xl border-[#3333]">Min. spend Tk300 . <Text className="font-bold text-red-500">Expires on 11 May 20...</Text></Text>
                <Text className="ml-3 font-bold text-primary">Details</Text>
              </View>
            </View>

          </View>
          <View className="bg-white rounded-xl mb-4">
            <View className="flex flex-row items-center px-3 py-[6px] border-t border-x rounded-xl border-[#3333]">
              <MaterialCommunityIcons name="brightness-percent" size={30} color="#D00764" />
              <View className="ml-3">
                <Text>Miss you! Here's TK100 off.</Text>
                <Text> <Text>TK100</Text> <MaterialIcons name="info-outline" size={14} color="#D00764" /> VNR3IRQ9</Text>
              </View>
            </View>
            <View className="border-dashed border-t w-[90%] mx-auto border-[#3333]"></View>
            {/* and */}
            <View className="py-2 px-3 border-b border-x rounded-xl border-[#3333]">
              <View className="flex flex-row items-center">
                <Text className="border px-2 py-[3px] text-[13px] rounded-2xl border-[#3333]">Min. spend Tk300 . <Text className="font-bold text-red-500">Expires on 11 May 20...</Text></Text>
                <Text className="ml-3 font-bold text-primary">Details</Text>
              </View>
            </View>

          </View>

        </View>

        {/* Discover */}
        

      </ScrollView>
    </SafeAreaView>
  );
};

export default VouchersAndOffers;
