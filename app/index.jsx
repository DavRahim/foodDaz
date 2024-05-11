import { View, Text, Button, TouchableOpacity, StatusBar, TextInput, Image, ScrollView } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import food from "../assets/panda1.png"
import food1 from "../assets/image10.png"
import food2 from "../assets/image11.png"
import food3 from "../assets/panda3.png"

//most cart

import daily1 from "../assets/daliy/daily1.png"
import daily2 from "../assets/daliy/daliy2.png"
import daily3 from "../assets/daliy/daliy3.png"
import daily6 from "../assets/daliy/daliy6.png"

// resturent
import res from "../assets/res/res.webp"
import res1 from "../assets/res/res1.webp"
import res2 from "../assets/res/res2.webp"
import res3 from "../assets/res/res3.webp"
import res4 from "../assets/res/res4.webp"

// shop
import shop from "../assets/shop/shop.webp"
import shop1 from "../assets/shop/shop1.webp"
import shop2 from "../assets/shop/shop2.webp"
import shop3 from "../assets/shop/shop3.webp"
import shop4 from "../assets/shop/shop4.webp"

// cui

import cui from "../assets/cui/cu.webp"
import cui1 from "../assets/cui/cu1.webp"
import cui2 from "../assets/cui/cu2.webp"
import cui3 from "../assets/cui/cu3.webp"
import cui4 from "../assets/cui/cu4.webp"
import cui5 from "../assets/cui/cu5.webp"
import cui6 from "../assets/cui/cu6.webp"
import cui7 from "../assets/cui/cu7.webp"
import cui8 from "../assets/cui/cu8.webp"
import cui9 from "../assets/cui/cu9.webp"
import cui10 from "../assets/cui/cu10.webp"
import cui11 from "../assets/cui/cu11.webp"
import cui12 from "../assets/cui/cu12.webp"
import cui13 from "../assets/cui/cu13.webp"

// pro
import pro from "../assets/pandaIcon.jpg"
import mapP from "../assets/mapP.jpg"
const Page = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView className="">
        <View className="bg-primary px-3 pt-[10px] pb-[15px] flex gap-[13px]">
          {/* location and cart */}
          <View className="flex flex-row justify-between ">
            <View className="flex flex-row justify-center items-center gap-4">
              <Ionicons name="reorder-three-outline" onPress={() => navigation.openDrawer()} size={28} color="white" />
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
        <ScrollView>
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

          {/* popular shop */}
          <View className="pl-4 pt-[10px] pb-[15px]">
            <Text className="text-[20px] font-bold mb-4">Popular Shop</Text>
            <ScrollView horizontal={true}>
              {/* cart */}
              <View className="w-[120px] h-[200px] mr-3">
                <Image
                  source={shop}
                  className="w-[120px] h-[110px] relative rounded-lg"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-[85px] left-[28px] bg-primary text-white font-bold text-[12px] px-[8px] py-[1px] rounded-[20px]">2 deals</Text>
                <View className="mt-2 flex justify-center items-center">
                  <Text className="font-bold text-center">Amana Big Bazar- Moha...</Text>
                  <Text className="text-gray-500">30 mins</Text>
                </View>
              </View>
              {/* cart */}
              <View className="w-[120px] h-[200px] mr-3">
                <Image
                  source={shop1}
                  className="w-[120px] h-[110px] relative rounded-lg"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-[85px] left-[28px] bg-primary text-white font-bold text-[12px] px-[8px] py-[1px] rounded-[20px]">2 deals</Text>
                <View className="mt-2 flex justify-center items-center">
                  <Text className="font-bold text-center">Amana Big Bazar- Moha...</Text>
                  <Text className="text-gray-500">30 mins</Text>
                </View>
              </View>
              {/* cart */}
              <View className="w-[120px] h-[200px] mr-3">
                <Image
                  source={shop2}
                  className="w-[120px] h-[110px] relative rounded-lg"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-[85px] left-[28px] bg-primary text-white font-bold text-[12px] px-[8px] py-[1px] rounded-[20px]">2 deals</Text>
                <View className="mt-2 flex justify-center items-center">
                  <Text className="font-bold text-center">Amana Big Bazar- Moha...</Text>
                  <Text className="text-gray-500">30 mins</Text>
                </View>
              </View>
              {/* cart */}
              <View className="w-[120px] h-[200px] mr-3">
                <Image
                  source={shop3}
                  className="w-[120px] h-[110px] relative rounded-lg"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-[85px] left-[28px] bg-primary text-white font-bold text-[12px] px-[8px] py-[1px] rounded-[20px]">2 deals</Text>
                <View className="mt-2 flex justify-center items-center">
                  <Text className="font-bold text-center">Amana Big Bazar- Moha...</Text>
                  <Text className="text-gray-500">30 mins</Text>
                </View>
              </View>
              {/* cart */}
              <View className="w-[120px] h-[200px] mr-3">
                <Image
                  source={shop4}
                  className="w-[120px] h-[110px] relative rounded-lg"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-[85px] left-[28px] bg-primary text-white font-bold text-[12px] px-[8px] py-[1px] rounded-[20px]">2 deals</Text>
                <View className="mt-2 flex justify-center items-center">
                  <Text className="font-bold text-center">Amana Big Bazar- Moha...</Text>
                  <Text className="text-gray-500">30 mins</Text>
                </View>
              </View>

            </ScrollView>

          </View>
          {/* popular Restaurants */}

          <View className="pl-4 pt-[10px]">
            <Text className="text-[20px] font-bold mb-4">Popular Restaurants</Text>
            <ScrollView horizontal={true}>
              {/* cart */}

              <View className="w-[270px] h-[250px] mr-3">
                <Image
                  source={res}
                  className="w-[270px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />

                <View className="">

                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Walffle Up</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-500 mb-2">$$$. $50 minimum. Dessert</Text>
                    <View className="flex flex-row items-center">
                      <MaterialIcons name="access-time" size={16} color="gray" />
                      <Text className="text-gray-500 ml-2">25-40 min </Text>
                      <MaterialIcons name="delivery-dining" size={16} color="gray" />
                      <Text className="text-gray-500">Tk 37</Text>
                    </View>
                  </View>

                </View>
              </View>
              <View className="w-[270px] h-[300px] mr-3">
                <Image
                  source={res1}
                  className="w-[270px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />

                <View className="">

                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Walffle Up</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-500 mb-2">$$$. $50 minimum. Dessert</Text>
                    <View className="flex flex-row items-center">
                      <MaterialIcons name="access-time" size={16} color="gray" />
                      <Text className="text-gray-500 ml-2">25-40 min </Text>
                      <MaterialIcons name="delivery-dining" size={16} color="gray" />
                      <Text className="text-gray-500">Tk 37</Text>
                    </View>
                  </View>

                </View>
              </View>
              <View className="w-[270px] h-[300px] mr-3">
                <Image
                  source={res2}
                  className="w-[270px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />

                <View className="">

                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Walffle Up</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-500 mb-2">$$$. $50 minimum. Dessert</Text>
                    <View className="flex flex-row items-center">
                      <MaterialIcons name="access-time" size={16} color="gray" />
                      <Text className="text-gray-500 ml-2">25-40 min </Text>
                      <MaterialIcons name="delivery-dining" size={16} color="gray" />
                      <Text className="text-gray-500">Tk 37</Text>
                    </View>
                  </View>

                </View>
              </View>
              <View className="w-[270px] h-[300px] mr-3">
                <Image
                  source={res3}
                  className="w-[270px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />

                <View className="">

                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Walffle Up</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-500 mb-2">$$$. $50 minimum. Dessert</Text>
                    <View className="flex flex-row items-center">
                      <MaterialIcons name="access-time" size={16} color="gray" />
                      <Text className="text-gray-500 ml-2">25-40 min </Text>
                      <MaterialIcons name="delivery-dining" size={16} color="gray" />
                      <Text className="text-gray-500">Tk 37</Text>
                    </View>
                  </View>

                </View>
              </View>
              <View className="w-[270px] h-[300px] mr-3">
                <Image
                  source={res4}
                  className="w-[270px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />

                <View className="">

                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Walffle Up</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-500 mb-2">$$$. $50 minimum. Dessert</Text>
                    <View className="flex flex-row items-center">
                      <MaterialIcons name="access-time" size={16} color="gray" />
                      <Text className="text-gray-500 ml-2">25-40 min </Text>
                      <MaterialIcons name="delivery-dining" size={16} color="gray" />
                      <Text className="text-gray-500">Tk 37</Text>
                    </View>
                  </View>

                </View>
              </View>
            </ScrollView>

          </View>

          {/* most cart */}

          <View className="pl-4 pb-[15px]">
            <Text className="text-[20px] font-bold mb-4">Your daily deals</Text>
            <ScrollView horizontal={true}>
              <View className="border border-[#0f0f0f2f] rounded-lg">
                <Image
                  source={daily1}
                  className="w-[150px] h-[180px]"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Image
                  source={daily2}
                  className="w-[150px] h-[180px]"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Image
                  source={daily3}
                  className="w-[150px] h-[180px]"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Image
                  source={daily6}
                  className="w-[150px] h-[180px]"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Image
                  source={daily2}
                  className="w-[150px] h-[180px]"
                  resizeMode="contain"
                />
              </View>

            </ScrollView>

          </View>

          {/* Cuisines */}

          <View className="pl-4 pt-[15px] ">
            <Text className="text-[20px] font-bold mb-4">Cuisines</Text>
            <ScrollView horizontal={true}>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui1}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui2}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui3}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui4}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui5}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui6}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui7}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui8}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui9}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui10}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui11}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>
              {/* cart */}
              <View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui12}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
                <View className="w-[100px] h-[140px]">
                  <Image
                    source={cui13}
                    className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                    resizeMode="cover"
                  />
                  <Text className="text-center font-semibold mt-2">
                    Biryani
                  </Text>
                </View>
              </View>

            </ScrollView>
          </View>

          {/* Become a pro */}
          <View className="px-4 pt-[15px] ">
            <View className="flex flex-row justify-between items-center border border-[#3333335b] p-2 rounded-lg">
              <View>
                <Text className="text-[18px] font-bold">Become a pro</Text>
                <Text>Unlock exclusive perks!</Text>
              </View>
              <Image
                source={pro}
                className="w-[60px] h-[60px] rounded-md"
              />
            </View>
          </View>

          {/* Pick up at restaurant */}

          <View className="pl-4 py-[25px] ">
            <Text className="text-[20px] font-bold mb-4">Pick up at a restaurant near you</Text>
            <Image
              source={mapP}
              className="w-[400px] h-[300px] relative"
            />
            <ScrollView horizontal={true} className="absolute bottom-10 left-6">


              {/* cart */}
              <View className="bg-white border-white border-[8px] rounded-lg mr-3">
                <Image
                  source={res2}
                  className="w-[300px] h-[150px] rounded-lg relative"
                  resizeMode="cover"
                />
                <Text className="absolute top-4 left-0 bg-primary text-white font-bold text-[12px] px-[8px] py-[2px] rounded-[5px]"> SAVE 15% ON PICK-UP!</Text>
                <Text className="absolute top-11 left-0 bg-gray-800 text-white font-bold text-[13px] px-[8px] py-[2px] rounded-[5px]"> Top restaurant</Text>
                <View className="">
                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Chicking -  Banani</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 mb-2">1.1km away . Pick in 10 min</Text>
                </View>
              </View>
              {/* cart */}
              <View className="bg-white border-white border-[8px] rounded-lg mr-3">
                <Image
                  source={res2}
                  className="w-[300px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />
                <View className="">
                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Chicking -  Banani</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 mb-2">1.1km away . Pick in 10 min</Text>
                </View>
              </View>
              {/* cart */}
              <View className="bg-white border-white border-[8px] rounded-lg mr-3">
                <Image
                  source={res2}
                  className="w-[300px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />
                <View className="">
                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Chicking -  Banani</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 mb-2">1.1km away . Pick in 10 min</Text>
                </View>
              </View>
              {/* cart */}
              <View className="bg-white border-white border-[8px] rounded-lg mr-3">
                <Image
                  source={res2}
                  className="w-[300px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />
                <View className="">
                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Chicking -  Banani</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 mb-2">1.1km away . Pick in 10 min</Text>
                </View>
              </View>
              {/* cart */}
              <View className="bg-white border-white border-[8px] rounded-lg mr-3">
                <Image
                  source={res2}
                  className="w-[300px] h-[150px] rounded-lg"
                  resizeMode="cover"
                />
                <View className="">
                  <View className="flex flex-row justify-between my-2">
                    <Text className="text-[15px] font-bold">Chicking -  Banani</Text>
                    <View className="flex flex-row gap-1">
                      <AntDesign name="star" size={16} color="gold" />
                      <Text className="text-[15px] font-bold">4.6</Text>
                      <Text className="text-gray-500">(4000+)</Text>
                    </View>
                  </View>
                  <Text className="text-gray-500 mb-2">1.1km away . Pick in 10 min</Text>
                </View>
              </View>






            </ScrollView>
          </View>

          {/* Shops */}
          <View className="pl-4 pt-[15px] ">
            <Text className="text-[20px] font-bold mb-4">Shops</Text>
            <ScrollView horizontal={true}>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>

            </ScrollView>



          </View>

          {/* PandaMart */}
          <View className="pl-4 pt-[15px] ">
            <Text className="text-[20px] font-bold mb-4">pandamart</Text>
            <ScrollView horizontal={true}>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui13}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Daily Deals
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>
              <View className="w-[100px] h-[140px]">
                <Image
                  source={cui}
                  className="w-[90px] h-[90px] bg-[#ffff] rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-center font-semibold mt-2">
                  Biryani
                </Text>
              </View>

            </ScrollView>



          </View>

          <View className="px-4 pt-[15px] mb-5">
            <View className="flex flex-row justify-between items-center border border-[#3333335b] p-2 rounded-lg">
              <View>
                <Text className="text-[18px] font-bold">Try panda rewards!</Text>
                <Text>Earn points and win prizes</Text>
              </View>
              <Image
                source={pro}
                className="w-[60px] h-[60px] rounded-md"
              />
            </View>
          </View>
        </ScrollView>
          <StatusBar backgroundColor={"#D00764"} barStyle={"light-content"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
