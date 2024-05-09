import { View, Text, Image, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import rew from "../../assets/rew/rew.png"
import rew1 from "../../assets/rew/rew1.png"

const PandaRewards = () => {
    return (
        <SafeAreaView className="">
            <ScrollView>
                <View className="bg-primary pb-36 relative">
                    <View className="flex-row justify-between items-center p-3">
                        <View className="w-[30px] h-[30px] bg-white rounded-full py-1 px-1">
                            <AntDesign name="arrowleft" size={20} color="#D00764" />
                        </View>
                        <View className="w-[30px] h-[30px] bg-white rounded-full py-1 pl-[6]">
                            <FontAwesome name="question-circle-o" size={20} color="#D00764" />
                        </View>
                    </View>
                    <Image
                        source={rew}
                        className="mx-auto"
                    />
                    <View className="absolute bottom-6 left-3 w-[95%] bg-white pb-4 pt-5 rounded-2xl">
                        <Text className="text-center text-[15px] font-semibold">
                            Points
                        </Text>
                        <Text className="text-center mt-2">
                            <MaterialCommunityIcons name="star-circle-outline" size={24} color="black" />
                            <Text className="text-[25px] font-bold">0</Text>
                            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                        </Text>
                        <Text className="text-center text-[16px] font-bold text-primary mt-4">
                            How to earn points
                        </Text>
                    </View>
                </View>


                {/* cart section */}
                <View className="bg-white -mt-3 rounded-t-2xl">
                    <Text className="my-6 text-[18px] font-bold mx-4">Complete stamp cards to win</Text>

                    <ScrollView horizontal={true} className="pl-6">
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[280px] rounded-2xl border border-[#3333331e] bg-slate-100 p-4 ml-3">
                            <Text className="">Food Delivery Order(10X)</Text>
                            <Text className="text-[16px] font-bold mt-2">CelebrEAT Mothers Day with five star dinner for two!</Text>
                            <Image
                                source={rew1}
                                className="w-[120px] h-[120px] ml-auto" 
                            />
                            <View className="flex-row justify-between items-start mx-3 mt-5">
                                <View className="flex-row justify-center items-center">
                                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                                     <View className="ml-3">
                                        <Text className="text-[14px] font-bold">To order</Text>
                                        <Text className="text-[14px] font-bold">10 order</Text>
                                     </View>
                                </View>
                                <View className="border border-primary rounded-lg">
                                    <Text className="text-[15px] text-primary font-bold py-1 px-3">Start</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <View className="flex-row py-3 border-t-[#33333338] px-7 my-7 items-center border-t">
                        <Image
                        source={rew1}
                        className="w-[70px] h-[70px] mr-7"
                        />
                        <View>
                        <View className="flex-row justify-between">
                            <Text className="text-[16px] font-bold">Badges</Text>
                            <Text className="text-[15px] font-bold text-primary">See all</Text>
                        </View>
                        <Text className="mt-4">Complete stamp cards to earn badges</Text>
                        </View>
                    </View>


                </View>
                

                {/* turn point */}
                <View className="bg-white mt-3 pt-14 pb-5">
                    <Image
                      source={rew}
                      className="w-[130px] h-[130px] mx-auto "
                    />
                    <Text className="text-center text-[16px] font-bold text-[#33333379]">Ready to win?</Text>
                    <Text className="text-center text-[22px] font-bold w-[280px] mx-auto mb-4">Turn point into your fave rewards</Text>
                    <Text className="text-center text-primary">Terms  & conditions</Text>
                </View>
                <StatusBar backgroundColor={"#D00764"} barStyle={"light-content"} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default PandaRewards;
