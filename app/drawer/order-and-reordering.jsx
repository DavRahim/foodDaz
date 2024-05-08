import { Image, ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import order from "../../assets/order/order.webp"

export class OrderAndReordering extends Component {
  render() {
    return (
      <SafeAreaView className=" ">
        <View className="bg-white px-4 flex-row items-center py-4">
          <Entypo name="cross" size={30} color="#D00764"/>
          <Text className="text-[18px] font-bold ml-4">Orders</Text>
        </View>
        <ScrollView>
        <Text className="text-[20px] font-bold my-7 mx-4">Past orders</Text>

        <View className="mx-4 ">
          {/* cart */}
            <View className="border p-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[16px] font-bold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[16px] font-bold">
                Tk 267
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
        <Text>OrderAndReordering</Text>
      </SafeAreaView>
    );
  }
}

export default OrderAndReordering;
