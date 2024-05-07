import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import logoPro from "../../assets/pandapro/pandapro6.png"
import logoPro1 from "../../assets/pandapro/pandapro1.webp"
import logoPro2 from "../../assets/pandapro/pandapro111.png"
import logoPro11 from "../../assets/pandapro/pandapro2.png"
import logoPro3 from "../../assets/pandapro/pandapro3.png"
import logoPro5 from "../../assets/pandapro/pandapro5.png"
import { router } from "expo-router";

const BecomePandaPro = () => {
  const [faq, setFaq] = useState(true)
  const [faq1, setFaq1] = useState(true)
  const [faq2, setFaq2] = useState(true)
  const [faq3, setFaq3] = useState(true)
  const [faq4, setFaq4] = useState(true)
  return (
    <SafeAreaView className="relative">
      <ScrollView className="mx-[14px]">
        <View className="mt-5">
          <AntDesign onPress={() => {
            router.push("/");
          }} name="arrowleft" size={20} color="#D00764" />
        </View>

        <View className="mt-5">
          <Image
            source={logoPro}
            className="w-[100px] h-[20px]"
            resizeMode="cover"
          />
        </View>

        {/* Text  */}

        <View className="flex flex-row items-center justify-between mt-3 p-1">
          <View className="w-[70%]">
            <Text className="text-[23px] font-bold">Explore exclusive perks with pandapro</Text>
            <Text className="mt-1 text-primary">
              The only plan you need for free deliveries, discount, and more!
            </Text>
          </View>
          <View className="w-[30%] items-center">
            <Image
              source={logoPro1}
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-md justify-center items-center translate-x-1 translate-y-2"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Cart subscribe */}

        <View className="flex flex-row items-center justify-between p-[10px] bg-[#d0076518] mt-6 rounded-lg">
          <View className="w-[20%]">
            <Image
              source={logoPro2}
              className="w-[70px] h-[70px]"
            />
          </View>
          <View className="w-[80%]">
            <Text className="text-[14px] text-primary font-bold">Subscribe now and start saving</Text>
            <Text className="text-[12px] mt-1 text-primary ">This pricing will continue to apply your next renewal cycle</Text>
          </View>
        </View>

        {/* month pack */}

        <View className="mt-4">
          <View>
            <Text className="text-[16px] font-bold">Monthly perks</Text>
            <View className="flex flex-row items-center justify-between p-2 border border-[#d0076518] mt-2 rounded-lg bg-white">
              <View className="w-[20%]">
                <Image
                  source={logoPro11}
                  className="w-[50px] h-[50px]"
                />
              </View>
              <View className="w-[80%]">
                <Text className="text-[14px]  font-bold">Free delivery</Text>
                <Text className="text-[12px] mt-1 text-[#333333b6]">Unlimited pricing will continue to apply your next</Text>
              </View>
            </View>
          </View>
          {/* cart-2 */}
          <View className="mt-2">
            <Text className="text-[16px] font-bold">Surprise perks</Text>
            <View className="flex flex-row items-center justify-between p-2 border border-[#d0076518] mt-2 rounded-lg bg-white">
              <View className="w-[20%]">
                <Image
                  source={logoPro3}
                  className="w-[50px] h-[50px]"
                />
              </View>
              <View className="w-[80%]">
                <Text className="text-[14px]  font-bold">Exclusive deals on restaurants delivery, pickup and more</Text>
                <Text className="text-[12px] mt-1 text-[#333333b6]">Look out for exclusive discount!</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity className="border border-primary mt-6 p-3 rounded-lg">
            <Text className="text-center text-primary text-[16px] font-bold"> See benefit details</Text>
          </TouchableOpacity>
        </View>

        {/* save */}

        <View className="mt-10">
          <View className="flex flex-row justify-between items-center pr-0 mr-0 gap-2  ">
            <View className="bg-primary pt-4 pb-8 w-[75%] rounded-xl">
              <Text className="text-[16px] text-white font-bold text-center">Save over Tk 1000 every month</Text>
            </View>
            <View className="w-[30%]">
              <Image
                source={logoPro5}
                className="w-[80px] h-[80px]"
                resizeMode="cover"
              />
            </View>
          </View>
          <View className="ml-10 my-7 border-l-4 border-l-[#0076d541] pl-5">
            <Text className="pb-3 text-[#333333ab]">No hidden charges</Text>
            <Text className="text-[#333333ab]">Unsubscribe anytime</Text>
          </View>
        </View>


        {/* Frequently asked */}

        <View className="mb-8">
          <Text className="text-[20px] font-bold mb-7">Frequently Asked Questions</Text>


          {/* FAQ */}
          <View className="bg-white px-2 py-4 rounded-lg mb-2" >
            <TouchableOpacity
              className="flex flex-row justify-between items-cente"
              onPress={() => setFaq(!faq)}
            >
              <Text className="text-[18px] font-bold">
                What is pandapro?
              </Text>
              {
                faq ? <MaterialIcons name="keyboard-arrow-up" size={24} color="#D00764" /> : <MaterialIcons name="keyboard-arrow-down" size={24} color="#D00764" />
              }

            </TouchableOpacity>

            <Text className={`mt-3 ${faq ? "hidden" : "block"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam consequatur tenetur accusamus explicabo in, doloremque eaque necessitatibus consectetur similique.
            </Text>
          </View>
          {/* FAQ */}
          <View className="bg-white px-2 py-4 rounded-lg mb-2" >
            <TouchableOpacity
              className="flex flex-row justify-between items-cente"
              onPress={() => setFaq1(!faq1)}
            >
              <Text className="text-[18px] font-bold">
                What is pandapro?
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#D00764" />
            </TouchableOpacity>

            <Text className={`mt-3 ${faq1 ? "hidden" : "block"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam consequatur tenetur accusamus explicabo in, doloremque eaque necessitatibus consectetur similique.
            </Text>
          </View>
          {/* FAQ */}
          <View className="bg-white px-2 py-4 rounded-lg mb-2" >
            <TouchableOpacity
              className="flex flex-row justify-between items-cente"
              onPress={() => setFaq2(!faq2)}
            >
              <Text className="text-[18px] font-bold">
                What is pandapro?
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#D00764" />
            </TouchableOpacity>

            <Text className={`mt-3 ${faq2 ? "hidden" : "block"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam consequatur tenetur accusamus explicabo in, doloremque eaque necessitatibus consectetur similique.
            </Text>
          </View>
          {/* FAQ */}
          <View className="bg-white px-2 py-4 rounded-lg mb-2" >
            <TouchableOpacity
              className="flex flex-row justify-between items-cente"
              onPress={() => setFaq3(!faq3)}
            >
              <Text className="text-[18px] font-bold">
                What is pandapro?
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#D00764" />
            </TouchableOpacity>

            <Text className={`mt-3 ${faq3 ? "hidden" : "block"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam consequatur tenetur accusamus explicabo in, doloremque eaque necessitatibus consectetur similique.
            </Text>
          </View>
          {/* FAQ */}
          <View className="bg-white px-2 py-4 rounded-lg mb-2" >
            <TouchableOpacity
              className="flex flex-row justify-between items-cente"
              onPress={() => setFaq4(!faq4)}
            >
              <Text className="text-[18px] font-bold">
                What is pandapro?
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#D00764" />
            </TouchableOpacity>

            <Text className={`mt-3 ${faq4 ? "hidden" : "block"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam consequatur tenetur accusamus explicabo in, doloremque eaque necessitatibus consectetur similique.
            </Text>
          </View>

          <Text className="text-center font-bold text-primary mt-8">See all FAQs</Text>
        </View>

        <View className="border-t border-t-[#3333]  mb-44">
          <Text className="text-center mx-5 mt-8">Subscription automatically renews each month. Check out the <Text className="text-primary">Terms and Conditions</Text></Text>
        </View>


      </ScrollView>

      <View className="absolute bottom-0 left-0">
        <View className="bg-white flex flex-row justify-between items-center rounded-t-xl w-full px-3 py-3 border-t-gray-400">
          <View>
            <Text>Starting from</Text>
            <Text className="text-[18px] font-bold">TK 50/mo.</Text>
          </View>
          <TouchableOpacity className="bg-primary px-10 py-3 rounded-lg">
            <Text className="text-white font-bold text-center">

              Select plan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BecomePandaPro;
