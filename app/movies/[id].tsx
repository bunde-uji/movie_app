import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import useFetch from '@/services/useFetch'
import { fetchMovieDetails } from '@/services/api'

const MovieDetails = () => {
  const router = useRouter()

  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id as string))

  return (
    <View className='p-10 bg-primary flex-1'>
      <View className='flex-row'>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name='arrow-back'
            size={20}
            color="white"
          />
        </TouchableOpacity>
        <Text>{movie && movie.original_title}</Text>
      </View>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})