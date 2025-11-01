import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "@/services/useFetch";
import { fetchMovieDetails, fetchSimilarMovies } from "@/services/api";
import { useEffect } from "react";
import MovieCard from "@/components/MovieCard";

const MovieDetails = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  console.log("id data type", typeof id)

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  const { data: similarMovies, loading: similarMoviesLoading, error: similarMoviesError } = useFetch(() => fetchSimilarMovies(Number(id)))

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

        <View className="px-3">
          {similarMoviesLoading ? <ActivityIndicator /> : similarMoviesError ? <Text>Error: {similarMoviesError.message}</Text> :
          <>
            <Text className="text-white text-xl font-bold mt-8 mb-2">You may also like</Text>
            <FlatList
            data={similarMovies?.slice(0, 10)}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              gap: 10,
              justifyContent: "flex-start",
            }}
            scrollEnabled={false}
          />
          </>
          }
          </View>
      </ScrollView>
      }
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
