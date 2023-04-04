import React, {useLayoutEffect, useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [mobileNumber, setMobileNumber] = useState('');

  const handlelogin = () => {
    navigation.navigate("OtpVerification", {mobileNumber: mobileNumber})
  }
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white flex-1 item-center p-10">
      <View className="flex flex-col items-center justify-center w-[100%] ">
        <Image source={require('../assests/MenWithCycle.png')} />
        <Text className="text-2xl font-bold text-[#EC5767] mt-10">
          Meet Random Strangers
        </Text>
        <View className="flex flex-row items-center justify-center h-14 mt-8">
          <View className="rounded-tl-lg rounded-bl-lg border-l-[1px] border-t-[1px] border-b-[1px] flex flex-row space-x-1 h-12 items-center justify-center bg-gray-200 p-2">
            <Image
              source={require('../assests/india.png')}
              className="h-5 w-5"
            />
            <Text>+91</Text>
          </View>
          <TextInput
            onChangeText={number => setMobileNumber(number)}
            className="rounded-tr-lg rounded-br-lg border-t-[1px] border-r-[1px] border-b-[1px] h-12 w-[70%] pl-3"
            placeholder="Enter Recievers Phone No."
          />
        </View>

        <View className="w-[100%] pr-4 pl-4">
          <TouchableOpacity
          onPress={handlelogin}
            className="mt-8 w-[100%] flex flex-row items-center justify-center bg-[#FF0000] p-2 rounded-full">
            <Text className="text-white font-bold text-lg">LOGIN</Text>
            <Image
              source={require('../assests/WhiteArrow.png')}
              className="absolute right-[20%]"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
