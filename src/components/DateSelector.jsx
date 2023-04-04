import React from 'react';
import {View, Image, Text, TouchableOpacity, Button} from 'react-native';

const DateSelector = ({onShowSuggestedDates}) => {
  return (
    <View className="p-3 flex border-t-[2px] border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Suggest Three Date to meet
      </Text>
      <View className="flex flex-col items-center w-full space-y-2">
        <View className="flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">27</Text>
            <Text className="text-sm text-black">Feb</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">28</Text>
            <Text className="text-sm text-black">Feb</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">1</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">2</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">3</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-center space-x-3">
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">4</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">5</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">6</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">7</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 h-16 w-16 rounded-full space-y-[-4] items-center flex flex-col justify-center border-[2px] border-black">
            <Text className="font-bold text-black text-lg">8</Text>
            <Text className="text-sm text-black">Mar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={onShowSuggestedDates}
        className="w-full rounded-md p-2 bg-[#FF0000] h-14 flex items-center justify-center">
        <Text className="text-white font-bold font-sans text-xl">
          Suggest Dates
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateSelector;
