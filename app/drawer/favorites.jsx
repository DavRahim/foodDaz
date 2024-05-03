import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

const Favorites = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex gap-3">
        <Text onPress={() => navigation.openDrawer()} className="text-primary">{}Food Daz</Text>
      <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
