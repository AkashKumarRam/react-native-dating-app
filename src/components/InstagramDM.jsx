import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const InstagramDM = () => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Continue the chat in Instagram DM
      </Text>
      <View className="  items-center justify-center space-y-2 b pl-6 pr-6 w-[100%]">
        <TouchableOpacity className="flex-row space-x-3 w-full p-2 rounded-md border-[2px] border-[#FF0000] bg-white h-14 flex  items-center justify-center">
          <Image source={require('../assests/InstagramRedIcon.png')} />
          <Text className="text-[#FF0000]  font-bold font-sans text-xl">
            Request Instagram ID
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row space-x-3 w-full p-2 rounded-md bg-[#FF0000] h-14 flex  items-center justify-center">
        <Image source={require('../assests/InstagramWhiteIcon.png')} />
          <Text className="text-white font-bold font-sans text-xl">
            Send your Instagram ID
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstagramDM;
