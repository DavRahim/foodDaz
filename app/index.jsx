import { View, Text, Button, TouchableOpacity, StatusBar, TextInput, Image } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import food from "../assets/panda1.png"
import food1 from "../assets/image10.png"
import food2 from "../assets/image11.png"
import food3 from "../assets/panda3.png"
const Page = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View className="">
        <View className="bg-primary px-3 pt-[10px] pb-[15px] flex gap-[13px] shadow-2xl">
          {/* location and cart */}
          <View className="flex flex-row justify-between ">
            <View className="flex flex-row justify-center items-center gap-4">
              <MaterialCommunityIcons onPress={() => navigation.openDrawer()} name="forwardburger" size={28} color="white" />
              <View className="text-white">
                <Text className="text-[16px] font-semibold text-white">Mohakhli, Dhaka, BD-2001</Text>
                <Text className="text-white text-[13px]">Dhaka</Text>
              </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-3">
              <AntDesign name="hearto" size={18} color="white" />
              <AntDesign name="shoppingcart" size={20} color="white" />
            </View>
          </View>
          {/* Input field */}

          <View className="bg-white rounded-[30px] py-[7px] px-4">
            <View className="flex flex-row items-center ml-4 gap-3">
              <AntDesign name="search1" size={22} color="gray" />
              <TextInput
                className="text-secondary"
                placeholder="Search for shops & restaurants"
              />
            </View>
          </View>
        </View>

        {/* Cart */}
        <View className="px-4 pt-[10px] pb-[15px] bg-[#E8ECEF]">
          <View className="flex flex-row justify-between">
            <View className="bg-[#FFFF] w-[50%] rounded-lg p-[18px] flex justify-between">
              <View className="">
                <Text className="text-[20px] font-bold">
                  Food Delivery
                </Text>
                <Text className="text-[12px]">
                  Order food you love
                </Text>

              </View>

              <Image
                source={food}
                width={120}
                height={120}
                className="w-[120px] h-[120px] ml-auto"
              />

            </View>
            <View className="w-[50%] flex gap-[10px]">
              {/* 1 */}
              <View className="bg-[#FFFF] p-4 rounded-lg">
                <View>
                  <Text className="text-[20px] font-bold">
                    Pick-up
                  </Text>
                  <Text className="text-[12px]">
                    Save upto 40% off
                  </Text>
                </View>
                <Image
                  source={food1}
                  width={100}
                  height={200}
                  className="w-[90px] h-[90px] ml-auto"
                />
              </View>

              <View className="bg-[#FFFF] flex flex-row px-4 pt-2 pb-1 rounded-lg">
                <View>
                  <Text className="text-[20px] font-bold">
                    Pandago
                  </Text>
                  <Text className="text-[12px]">
                    Fastest
                  </Text>
                  <Text className="text-[12px]">
                    parcel Deliv...
                  </Text>

                </View>

                <Image
                  source={food2}
                  width={100}
                  height={200}
                  className="w-[50px] h-[50px] ml-auto"
                />

              </View>

            </View>
          </View>

        </View>

        {/* cart-1 */}
        <View className=" px-4 pt-[10px] pb-[15px]">
          <View className="bg-[#FFFBF0] pl-4 border border-[#0f0f0f2f] rounded-lg">
            <Text className="text-[#0f0f0f98] top-3">Sponsored</Text>
              <View className="flex flex-row justify-between items-end">
                <View className="mb-9">
                  <View className="mb-4">
                  <Text className="text-[19px] font-bold"> 
                    First grocery order
                  </Text>
                  <Text className="text-[15px] text-[#0f0f0f98]">comes with TK 100 Off!</Text>
                </View>
              <TouchableOpacity className="w-[120px] rounded-lg bg-primary py-2 ">
                <Text className="text-center font-bold text-[16px] text-white">order now</Text>
              </TouchableOpacity>
                </View>
                <Image
                source={food3}
                width={200}
                height={200}
                className="w-[150px] h-[200px]"
                resizeMode="contain"
                />
              </View>
         </View>
        </View>


      </View>
      <StatusBar backgroundColor={"#D00764"} barStyle={"light-content"} />
    </SafeAreaView>
  );
};

export default Page;
