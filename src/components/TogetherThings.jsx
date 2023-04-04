import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import restaurantRed from '../assests/Resturant.png';
import restaurantGray from '../assests/GrayResturant.png';

import movieGray from '../assests/Movies.png';
import movieRed from '../assests/GrayMovie.png';

import carGray from '../assests/GrayCar.png';
import carRed from '../assests/Car.png';

import cupGray from '../assests/GrayCup.png';
import cupRed from '../assests/Cup.png';

import netflixGray from '../assests/GrayNetflix.png';
import netflixRed from '../assests/Nettflix.png';

import Proposal from './Proposal';

const TogetherThings = ({onShowInstagramDm}) => {
  return (
    <View className="p-3 flex border-t-[2px]  border-gray-300 flex-col items-center justify-center space-y-4">
      <Text className="font-bold text-black text-xl">
        Things you suggest to do together
      </Text>
      <View className="flex flex-col items-center w-full space-y-2">
        <View className="flex flex-row items-center justify-between pr-4 pl-4 w-[100%]">
          <Proposal grayImg={restaurantGray} readImg={restaurantRed} />
          <Proposal grayImg={movieRed} readImg={movieGray} />
          <Proposal grayImg={carGray} readImg={carRed} />
          <Proposal grayImg={cupGray} readImg={cupRed} />
          <Proposal grayImg={netflixGray} readImg={netflixRed} />
        </View>
      </View>
      <View className="flex flex-row items-center justify-between space-x-2 pr-2 pl-2">
        <TouchableOpacity
          onPress={onShowInstagramDm}
          className="w-[100%] p-2 rounded-md bg-[#FF0000] h-14 flex flex-row items-center justify-center">
          <Text className="text-white font-bold font-sans text-xl">
            Propose Plans
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TogetherThings;
