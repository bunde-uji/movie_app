import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./search";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="p-3">
        <Ionicons name="person" size={35} color="white" />
        <Text className="text-white">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
