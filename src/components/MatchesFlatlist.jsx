import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import jeetesh from '../assests/Jeetesh.png';
import Matches from '../components/Matches';


const Data = [
  {id: 1, name: 'Jeetesh', profile: jeetesh, age: 29, gender: 'M'},
  {id: 2, name: 'Jeetesh', profile: jeetesh, age: 29, gender: 'M'},
  {id: 3, name: 'Jeetesh', profile: jeetesh, age: 29, gender: 'M'},
  {id: 4, name: 'Jeetesh', profile: jeetesh, age: 29, gender: 'M'},
  {id: 5, name: 'Jeetesh', profile: jeetesh, age: 29, gender: 'M'},
];

const MatchesFlatlist = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-4 flex flex-row items-center justify-between">
        <TouchableOpacity
          className="flex  items-center justify-center space-x-1 rounded-lg"
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assests/Arrow.png')} />
        </TouchableOpacity>

        <TouchableOpacity className="flex  items-center justify-center space-x-1 rounded-lg">
          <Image source={require('../assests/Share.png')} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col items-center justify-center p-2 bg-red-white space-y-2 ">
        <Text className="text-2xl font-bold text-black">Your Matches</Text>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <Matches
              name={item.name}
              gender={item.gender}
              profile={item.profile}
              age={item.age}
            />
          )}
          keyExtractor={item => item.id}
          className="bg-white flex flex-col space-y-10"
        />
      </View>
    </SafeAreaView>
  );
};

export default MatchesFlatlist;
