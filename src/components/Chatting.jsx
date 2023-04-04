import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DateSelector from './DateSelector';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import SuggestedDates from './SuggestedDates';
import PreferredTime from './PreferredTime';
import Timing from './Timing';
import SuggestArea from './SuggestArea';
import TogetherThings from './TogetherThings';
import InstagramDM from './InstagramDM';

const Chatting = () => {
  const [showSuggestDates, setShowSuggestDates] = useState(false);
  const [showPreferedTime, setShowPreferedTime] = useState(false);
  const [showTiming, setTiming] = useState(false);
  const [showSuggestArea, setSuggestArea] = useState(false);
  const [showTogetherThings, setShowTogetherThings] = useState(false);
  const [showInstagramDm, setShowInstagramDm] = useState(false);

  const handleShowSuggestedDates = () => {
    setShowSuggestDates(true);
    setShowPreferedTime(false);
  };

  const handleShowPreferedTime = () => {
    setShowPreferedTime(true);
    setShowSuggestDates(false);
  };

  const handleShowTiming = () => {
    setTiming(true);
    setShowPreferedTime(false);
    setShowSuggestDates(false);
  };

  const handleShowSuggestedArea = () => {
    setSuggestArea(true);
    setTiming(false);
    setShowSuggestDates(false);
    setShowPreferedTime(false);
  };

  const handleShowTogetherThings = () => {
    setShowTogetherThings(true);
    setSuggestArea(false);
    setTiming(false);
    setShowSuggestDates(false);
    setShowPreferedTime(false);
  };

  const handleShowInstagramDM = () => {
    setShowInstagramDm(true);
    setShowTogetherThings(false);
    setSuggestArea(false);
    setTiming(false);
    setShowSuggestDates(false);
    setShowPreferedTime(false);
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white flex flex-col h-[100%] justify-between">
      <View className="flex flex-row justify-between items-center p-3 border-b-[1px] pl-6 pr-6 border-gray-500">
        <View className="flex flex-row space-x-3 items-center justify-center">
          <Image source={require('../assests/Arrow.png')} className="h-3" />
          <View className="flex flex-row space-x-2 items-center">
            <Image
              source={require('../assests/Jeetesh.png')}
              className="h-10 w-10"
            />
            <Text className="text-lg font-bold">Jeetesh</Text>
          </View>
        </View>
        <Image source={require('../assests/RedShield.png')} />
      </View>

      {/* Scroable */}
      <View className="flex-1 "></View>

      {showSuggestDates ? (
        <SuggestedDates
          onNoneButtonClick={() => setShowSuggestDates(false)}
          onClickOnSoundGood={handleShowPreferedTime}
        />
      ) : showPreferedTime ? (
        <PreferredTime onShowTiming={handleShowTiming} />
      ) : showTiming ? (
        <Timing onShowArea={handleShowSuggestedArea} />
      ) : showSuggestArea ? (
        <SuggestArea onShowTogether={handleShowTogetherThings} />
      ) : showTogetherThings ? (
        <TogetherThings onShowInstagramDm={handleShowInstagramDM} />
      ) : showInstagramDm ? (
        <InstagramDM />
      ) : (
        <DateSelector onShowSuggestedDates={handleShowSuggestedDates} />
      )}
    </View>
  );
};

export default Chatting;
