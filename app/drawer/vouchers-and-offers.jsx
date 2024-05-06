import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const VouchersAndOffers = () => {
  return (
    <SafeAreaView>
        <View>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text>Vouchers & Offers</Text>
        </View>
    </SafeAreaView>
  );
};

export default VouchersAndOffers;
