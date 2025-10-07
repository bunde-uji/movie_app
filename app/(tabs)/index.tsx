import { ScrollView, Text, View, Image } from "react-native";
import "../global.css"
import SearchBar from "@/components/SearchBar"
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-primary w-full">
      <ScrollView 
        className="p-5 flex-1 w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/images/icon.png")} className="h-14 w-14 mb-2" />
        <SearchBar 
          placeholder="Search for a movie"
          onPress={() => router.push("/search")}
          onChangeText={() => {}}
        />
      </ScrollView>
    </View>
  );
}
