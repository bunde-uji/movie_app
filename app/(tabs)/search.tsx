import { Text, View } from 'react-native'
import React, { useState } from 'react'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api';
import SearchBar from '@/components/SearchBar';

const Search = () => {
  const { data, loading, error, refetch } = useFetch(() => fetchMovies({ query: "" }));
  const [search, setSearch] = useState("");

  return (
    <View className='flex-1 bg-primary p-5 pt-10'>
      <SearchBar
        placeholder="Search for a movie"
        // onPress={() => router.push("/search")}
        onChangeText={(text) => setSearch(text)}
        value={search}
        onSubmitEditing={() => {
          setSearch(search);
          refetch();
        }}
      />

      {data && <Text className="text-white text-2xl mb-5 font-bold">Search Results: {data.length}</Text>}
    </View>
  )
}

export default Search
