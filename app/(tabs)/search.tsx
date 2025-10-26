import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

const Search = () => {
  const { data, loading, error, refetch, reset } = useFetch(() =>
    fetchMovies({ query: search }), false
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      if (search.trim()) {
        refetch();
      } else {
        reset();
      }
    }, 1000);
    return () => clearTimeout(setTimeoutId);
  }, [search]);

  return (
    <View className="flex-1 bg-primary p-5 pt-10">
        <FlatList
          data={data}
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
            justifyContent: "flex-start",
          }}
          scrollEnabled={true}
          ListHeaderComponentStyle={{
            marginBottom: 10,
            position: "sticky",
            gap: 10
          }}
          ListHeaderComponent={
            <>
              <SearchBar
                placeholder="Search for a movie"
                onChangeText={(text) => setSearch(text)}
                value={search}
                onSubmitEditing={() => {
                  setSearch(search);
                  refetch();
                }}
              />

              {/* {data && (
                <Text className="text-white text-lg mb-5 font-bold">
                  Search Results for &quot;{search}&quot;: ({data.length})
                </Text>
              )} */}

              {loading ? (
                <ActivityIndicator size="large" color="#1873c2" />
              ) : error ? (
                <Text className="text-white text-lg mb-5 font-bold">
                  Error: {error.message}
                </Text>
              ) : data && data.length < 1 ? (
                <Text className="text-white text-lg mb-5 font-bold">
                  No results found
                </Text>
              ) : data && data.length > 0 ? (
                <Text className="text-white text-lg mb-5 font-bold">
                  Search Results for &quot;{search}&quot;: {data.length}
                </Text>
              ) : null
              }
            </>
          }
          // ListEmptyComponent={

          // }
        />
    </View>
  );
};

export default Search;
