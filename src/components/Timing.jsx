import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Timing = ({onShowArea}) => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Do you agree with the timing?
      </Text>
      <View className="flex flex-col items-center justify-center space-y-2 b pl-6 pr-6 w-[100%]">
        <TouchableOpacity className="w-full p-2 rounded-md border-[2px] border-[#FF0000] bg-white h-14 flex  items-center justify-center">
          <Text className="text-[#FF0000]  font-bold font-sans text-xl">
            Nah, Suggest another time
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShowArea}
          className="w-full p-2 rounded-md bg-[#FF0000] h-14 flex  items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Yes, that sounds good
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timing;
