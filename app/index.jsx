import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>Welcome to our app</Text>
          <Link href={'favorites'}>
              <Text style={{ fontSize: 18 }}>Go to favorites Page</Text>
          </Link>
          <Link href={'/blog'} asChild>
              <Button title='Go to Blog Page' />
          </Link>
          <Link href={'/blog'} asChild>
              <Button title='Go to Contact Page' />
          </Link>
          <Link href={'(drawer)/(tabs)/feed'} asChild>
              <Button title='Go to Tabs' />
          </Link>
      </View>
  );
};

export default Page;
