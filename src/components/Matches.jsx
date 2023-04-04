import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

const MatchesFlatlist = ({profile, name, gender, age}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="p-2 flex flex-row items-center space-x-28 rounded-md mt-2 border-[1px]">
      <View className="flex flex-row items-center justify-center space-x-2">
        <Image source={profile} />
        <View className="flex flex-col items-start justify-center space-x-1">
          <Text className="text-black text-lg font-bold">{name}</Text>
          <Text>{age}, <Text>{gender}</Text></Text>
        </View>
      </View>
      <View className="flex flex-col items-center justify-center space-y-1">
        <Text className="text-black">Expressed Interest</Text>
        <TouchableOpacity className="bg-[#FF0000]  flex flex-row items-center justify-center p-2 space-x-3 rounded-md py-2  px-4">
          <Image source={require('../assests/Time.png')} />
          <Text className="text-white font-bold">Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchesFlatlist;
