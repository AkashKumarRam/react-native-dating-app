import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const SuggestArea = ({onShowTogether}) => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Suggest area to hangout
      </Text>
      <View className="flex flex-col items-center justify-center space-y-2 b pl-3 pr-3 w-[100%]">
        <View className="flex flex-row items-center justify-center space-x-2 ">
          <View className="flex flex-col items-center justify-center space-y-2">
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Indranagar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                HSR Layout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Sarjapur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Whitefield
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-col items-center justify-center space-y-2">
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Kormangla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                MG Road
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Jayanagar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full px-8 py-2 rounded-sm bg-white border-[2px] border-[#FF0000] h-12 flex  items-center justify-center">
              <Text className="text-[#FF0000] font-bold font-sans text-xl">
                Other Places
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={onShowTogether}
        className="w-[94%] rounded-md bg-[#FF0000] h-14 flex  items-center justify-center">
        <Text className="text-white font-bold font-sans text-xl">
          Suggest Dates
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestArea;
