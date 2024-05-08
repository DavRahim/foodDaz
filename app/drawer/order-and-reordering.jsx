import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
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
        <Text className="text-[20px] font-bold mt-7 mb-5 mx-4">Past orders</Text>

        <View className="mx-4 ">
          {/* cart */}
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
            <View className="border border-[#33333352] p-3 rounded-xl mb-3">
              <View className="flex-row justify-between">
              <View className="flex-row">
              <Image
                  source={order}
                  className="w-[90px] h-[90px] rounded-xl"
              />
              <View className="w-[200px] ml-4">
                <Text className="text-[15px] font-semibold">Ka Te Kacchi Express - Aftabnagar</Text>
                <Text className="mt-2">Picked up on 19 Apr 17:00</Text>
                    <Text className="mt-2">Basmati Mutton Kacchi</Text>
              </View>
              </View>
                <Text className="text-[15px] font-semibold">
                Tk 267
              </Text>
            </View>
            <TouchableOpacity className="bg-primary py-[6px] rounded-lg mt-3">
              <Text className="text-center font-bold text-white">
              Select items to reorder
              </Text>
           </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      </SafeAreaView>
    );
  }
}

export default OrderAndReordering;
