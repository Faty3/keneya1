import { View, Text,
    SafeAreaView } from 'react-native'
  import React from 'react'
  import { useNavigation } from '@react-navigation/native';
  
  export default function NumberScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
        <View className="flex-1 flex justify-around my-4">
          <Text className="font-bold text-4xl text-center">Numero Vert</Text>
        </View>
    </SafeAreaView>
    )
  }