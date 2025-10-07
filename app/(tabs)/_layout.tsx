import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarPosition: "bottom",
        tabBarStyle: {
          backgroundColor: "#1f2937",
          borderTopWidth: 0,
          paddingVertical: 50,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#1873c2" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={focused ? "#1873c2" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{ headerShown: false, title: "Saved", tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? "bookmark" : "bookmark-outline"}
            size={24}
            color={focused ? "#1873c2" : "white"}
          />
        ) }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile", tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? "person" : "person-outline"}
            size={24}
            color={focused ? "#1873c2" : "white"}
          />
        ) }}
      />
    </Tabs>
  );
};

export default _layout;
