import { ScrollView, Text, View, Image, ActivityIndicator, FlatList } from "react-native";
import "../global.css";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 justify-center items-center bg-primary w-full">
      <ScrollView
        className="p-5 flex-1 w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/icon.png")}
          className="h-14 w-14 my-2"
        />
        {/* <View className="w-full mb-5">
          <SearchBar
            placeholder="Search for a movie"
            onPress={() => router.push("/search")}
            onChangeText={() => {}}
          />
        </View> */}

        {moviesLoading ? <ActivityIndicator /> : 
          moviesError ? <Text>Error: {moviesError.message}</Text> :
          <View>
            <Text className="text-white text-2xl mb-5 font-bold">Latest Movies</Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard
                  id={item.id}
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  release_date={item.release_date}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                gap: 10,
                // rowGap: 10,
                justifyContent: "flex-start", 
              }}
              scrollEnabled={false}
            />
          </View>
        }

      </ScrollView>
    </View>
  );
}
