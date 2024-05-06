import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const VouchersAndOffers = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row px-3 py-5 bg-white gap-5 border-b-gray-600">
        <AntDesign name="arrowleft" size={24} color="#D00764" />
        <Text className="text-[16px] font-bold">Vouchers & Offers</Text>
      </View>
      <ScrollView>
        <View>

           <View>
            <Text>Tk 0</Text>
            <Text> saved this month</Text>
           </View>

           <View>
            <AntDesign name="creditcard" size={24} color="black" />
            <Text>Add a Voucher</Text>
           </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default VouchersAndOffers;
