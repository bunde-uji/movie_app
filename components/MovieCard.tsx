import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-1/3">
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                className="w-full h-48 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-white text-base font-bold">{title}</Text>
            <Text className="text-gray-400 text-sm">{release_date}</Text>
            <Text className="text-gray-400 text-sm">{vote_average}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard

