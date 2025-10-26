import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";

const MovieDetails = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <SafeAreaView className="bg-primary flex-1 w-full">
      {movie && 
        <ScrollView className="flex-row w-full">
        <View className="flex-row items-center gap-2 p-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-medium">{movie && movie.original_title}</Text>
        </View>
        <View className="w-full">
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            className="h-96 w-screen"
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
      }
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
