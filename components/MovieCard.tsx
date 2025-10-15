import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-1/3 mb-8 rounded-lg bg-secondary">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          className="w-full h-48 rounded-t-lg"
          resizeMode="cover"
        />
        <View className="p-2">
          <Text className="text-white text-sm font-bold" numberOfLines={1}>{title}</Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400 text-sm">
              {release_date.split("-")[0]}
            </Text>
            <View className="flex-row items-center gap-1">
              <Ionicons name="star-outline" size={14} color="gold" />
              <Text className="text-white text-sm">
                {Math.round(vote_average)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
