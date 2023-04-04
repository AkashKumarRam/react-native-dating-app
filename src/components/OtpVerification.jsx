import React, {useLayoutEffect, useRef} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OtpVerification = (props) => {
  const navigation = useNavigation();

  const {mobileNumber} = props.route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const handleInputChange = (value, ref) => {
    if (value.length === 1) {
      ref.current.blur();
      // move focus to the next input
      switch (ref) {
        case input1:
          input2.current.focus();
          break;
        case input2:
          input3.current.focus();
          break;
        case input3:
          input4.current.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <View className="bg-white flex-1 item-center p-10">
      <View className="flex flex-col items-center justify-center w-[100%] ">
        <Image source={require('../assests/MenVector.png')} />
        <Text className="text-2xl font-bold text-[#FF0000] mt-10">
          Enter OTP Code
        </Text>

        <Text className="text-md  text-[#FF0000] mt-2">
          {`sent to +91${mobileNumber}`}
        </Text>

        <View className="flex flex-row items-center space-x-2 mt-4">
          <TextInput
            ref={input1}
            className="w-14 h-14 border-2 border-black rounded-md text-center text-2xl font-bold"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleInputChange(value, input1)}
          />
          <TextInput
            ref={input2}
            className="w-14 h-14 border-2 border-black rounded-md text-center text-2xl font-bold"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleInputChange(value, input2)}
          />
          <TextInput
            ref={input3}
            className="w-14 h-14 border-2 border-black rounded-md text-center text-2xl font-bold"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleInputChange(value, input3)}
          />
          <TextInput
            ref={input4}
            className="w-14 h-14 border-2 border-black rounded-md text-center text-2xl font-bold"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={value => handleInputChange(value, input4)}
          />
        </View>

        <View className="w-[100%] pr-4 pl-4">
          <TouchableOpacity className="mt-8 w-[100%] flex flex-row items-center justify-center bg-[#FF0000] p-2 rounded-full">
            <Text className="text-white font-bold text-lg">Continue</Text>
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

export default OtpVerification;
