import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 w-full h-[90%]  border-b-[1px] border-gray-400">
        <View className="p-3 pl-6 pr-6 bg-white border-b-[1px] border-gray-400 flex flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            className="flex flex-row items-center justify-center p-1 space-x-3 rounded-md ">
            <Image source={require('../assests/Profile.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MatchesFlatlist')}
            className="bg-black  flex flex-row items-center justify-center p-2 space-x-3 rounded-md ">
            <Image source={require('../assests/Time.png')} />
            <Text className="text-white font-bold">Matchces</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="flex-1 items-center pt-4 pl-6 pr-6 space-y-2">
            <View className="p-3 border-[1px] border-gray-400 w-[100%] rounded-xl shadow-xl flex flex-col space-y-2 items-center justify-center">
              <Image
                source={require('../assests/ProfileImage.png')}
                className="h-70 w-70 rounded-xl"
              />

              <View className="w-[100%] p-2 flex flex-row items-start justify-between">
                <View className=" flex flex-col items-start">
                  <Text className="font-bold text-lg">Manish Mandal</Text>
                  <Text className="text-md ">Product Manager</Text>
                  <Text className="text-md ">Forbes Advisor</Text>
                </View>
                <View className=" flex flex-col items-start">
                  <Text className="text-lg">27 Years</Text>
                </View>
              </View>
            </View>
            <View className="p-4 border-[1px] border-gray-400 shadow-xl rounded-lg w-[100%]">
              <Text className="text-lg font-semibold">
                Manish is here Banglore for few weeks and looking to with for a
                fun soul after office hours to explore the city.
              </Text>
            </View>
            <View className="w-[100%] mb-4 rounded-lg border-[1px] border-gray-400 shadow-xl flex flex-col items-center justify-center p-2 space-y-2">
              <Text className="font-bold text-xl text-[#FF0000] -mt-2">
                Open to
              </Text>
              <View className="flex flex-row w-[100%] items-center justify-between pl-2 pr-2">
                <View className="flex flex-col items-center justify-center p-1">
                  <Image source={require('../assests/Dining.png')} />
                  <Text>Dining</Text>
                </View>
                <View className="flex flex-col items-center justify-center p-1">
                  <Image source={require('../assests/Movie.png')} />
                  <Text>Movie</Text>
                </View>
                <View className="flex flex-col items-center justify-center p-1">
                  <Image source={require('../assests/Driving.png')} />
                  <Text>Drive</Text>
                </View>
                <View className="flex flex-col items-center justify-center p-1">
                  <Image source={require('../assests/Party.png')} />
                  <Text>Party</Text>
                </View>
                <View className="flex flex-col items-center justify-center p-1">
                  <Image source={require('../assests/Netflix.png')} />
                  <Text>Netflix</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className="p-2 bg-white flex flex-row items-center justify-center space-x-2">
        <TouchableOpacity className="bg-white border-2 border-[#FF0000] rounded-md px-6 py-2">
          <Text className="text-[#FF0000] font-bold text-lg">Next</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#FF0000] rounded-md px-6 py-2 flex items-center justify-center w-[73%]">
          <Text className="text-white font-bold text-lg">Interested</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
