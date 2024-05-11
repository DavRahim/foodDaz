import { View, Text, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import inv from "../../assets/rew/rew6.png"

const InviteFriends = () => {
  console.log("git");
  return (
    <SafeAreaView className="bg-white">
          <View className="bg-white px-4 flex-row items-center py-4">
              <AntDesign name="arrowleft" size={30} color="#D00764" />
              <Text className="text-[18px] font-bold ml-4">How it works</Text>
          </View>
          <View className="bg-white mx-auto">
            <Image
            source={inv}
             className="w-[200px] h-[200px] mx-auto"
             resizeMode="cover"
            />
            <Text className="w-[250px] text-center text-[20px] font-bold">
                Invite your friends for a TK 200 referral bonus!
            </Text>
          </View>
          <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
    </SafeAreaView>
  );
};

export default InviteFriends;
