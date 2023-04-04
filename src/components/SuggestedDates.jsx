import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const SuggestedDates = ({onNoneButtonClick, onClickOnSoundGood}) => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Suggest Three Date to meet
      </Text>
      <View className="flex flex-col items-center w-full space-y-2">
        <View className="flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity className="relative p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">1</Text>
            <Text className="text-sm text-black">Mar</Text>
            <Image
              source={require('../assests/GreenTick.png')}
              className="absolute top-0 right-0"
            />
          </TouchableOpacity>
          <TouchableOpacity className="relative p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">2</Text>
            <Text className="text-sm text-black">Mar</Text>
            <Image
              source={require('../assests/GreenTick.png')}
              className="absolute top-0 right-0"
            />
          </TouchableOpacity>
          <TouchableOpacity className="relative p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">3</Text>
            <Text className="text-sm text-black">Mar</Text>
            <Image
              source={require('../assests/GreenTick.png')}
              className="absolute top-0 right-0"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between space-x-2 pr-2 pl-2">
        <TouchableOpacity
          onPress={onNoneButtonClick}
          className="w-[30%] p-2 bg-white border-[2px] rounded-md border-[#FF0000] h-14 flex flex-row items-center justify-center">
          <Text className="text-[#FF0000] font-bold font-sans text-xl">None</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickOnSoundGood}
          className="w-[70%] p-2 rounded-md bg-[#FF0000] h-14 flex flex-row items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Sounds Good.!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuggestedDates;
