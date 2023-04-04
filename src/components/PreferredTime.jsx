import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const PreferredTime = ({onShowTiming}) => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        What would be your preferred Time?
      </Text>
      <View className="flex flex-col items-center justify-center space-y-2 b pl-6 pr-6 w-[100%]">
        <TouchableOpacity
          onPress={onShowTiming}
          className=" w-full p-2 rounded-md bg-[#FF00A8] h-14 flex  items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Morning around breakfast
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShowTiming}
          className="w-full p-2 rounded-md bg-[#4B8EDC] h-14 flex  items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Afternoon around Lunch Time
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShowTiming}
          className="w-full p-2 rounded-md bg-[#6AD661] h-14 flex  items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Evening after Office Hours
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferredTime;
