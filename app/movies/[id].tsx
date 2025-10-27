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
        <ScrollView className="flex-col w-full" horizontal={false}>
        <View className="flex-row items-center gap-2 p-3">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View className="w-full">
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            className="h-96 w-screen"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center px-3">
          <Text className="text-white text-2xl font-bold mt-3">{movie && movie.original_title}</Text>

          <View className="flex-row gap-2 items-center">
            <Text className="text-gray-300">{movie.release_date.split("-")[0]}</Text>
            <Text className="text-gray-300 px-1 py-[2px] bg-gray-700 text-sm rounded-sm">{movie.adult ? "18+" : "13+"}</Text>
            <View className="flex-row items-center gap-1 text-gray-300 px-1 py-[2px] bg-gray-700 text-sm rounded-sm">
              <Ionicons name="star" size={10} color="gold" />
              <Text className="text-sm text-gray-300">{Math.round(movie.vote_average)}/10</Text>
            </View>
            {/* <Text>{movie.}</Text> */}
          </View>

          <View className="flex-col">
            <Text className="text-white pt-5 flex-wrap">{movie.overview}</Text>
          </View>
        </View>
      </ScrollView>
      }
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
