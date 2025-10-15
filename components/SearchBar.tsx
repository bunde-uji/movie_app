import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    placeholder: string;
    onPress?: () => void;
    onChangeText?: (text: string) => void;
    value?: string;
    onSubmitEditing?: () => void;
}

const SearchBar = ({ onPress, placeholder, onChangeText, value, onSubmitEditing}: Props) => {
  return (
    <View className="flex-row items-center justify-between bg-secondary rounded-full p-2 w-full">
      <Ionicons name="search" size={24} color="white" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        className="flex-1 ml-2 text-white"
        onChangeText={onChangeText}
        onPress={onPress}
        value={value}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
}

export default SearchBar

