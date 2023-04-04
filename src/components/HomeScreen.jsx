import {View, Text, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

const HomeScreen = () => {
  const [selectedState, setSelectedState] = useState('');
  const [whyCity, setWhyCity] = useState('');
  const [preferredCity, setPreferredCity] = useState('');
  const [stranger, setStranger] = useState('');
  const [gender, setGender] = useState('');
  const [personality, setPersonality] = useState('');

  const handlePersonality = stateName => {
    setPersonality(stateName);
  };

  const handleGender = stateName => {
    setGender(stateName);
  };

  const handleWhyCity = stateName => {
    setWhyCity(stateName);
  };

  const handleStranger = stateName => {
    setStranger(stateName);
  };

  const handlePreferredCity = stateName => {
    setPreferredCity(stateName);
  };

  const handleStateSelection = stateName => {
    setSelectedState(stateName);
  };

  navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: 'black',
    activeLabelColor: 'black',
    activeStepNumColor: 'white',
    activeStepIconColor: 'black',
    completedStepIconColor: 'lightgreen',
    completedProgressBarColor: 'lightgreen',
    completedCheckColor: 'green',
  };

  const previousbuttonTextStyle = {
    color: '#FF0000',
    fontWeight: 'bold',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  };

  const nextbuttonTextStyleState = {
    backgroundColor: selectedState.length === 0 ? '#FFA07A' : '#FF0000',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    width: 280,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: -7,
    marginRight: -50,
  };

  const nextbuttonTextStyleCity = {
    backgroundColor:
      whyCity.length === 0 || preferredCity.length === 0
        ? '#FFA07A'
        : '#FF0000',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    width: 280,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: -7,
    marginRight: -50,
  };

  const nextbuttonTextStyleStranger = {
    backgroundColor: stranger.length === 0 ? '#FFA07A' : '#FF0000',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    width: 280,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: -7,
    marginRight: -50,
  };

  const nextbuttonTextStyleGender = {
    backgroundColor:
      gender.length === 0 || personality.length === 0 ? '#FFA07A' : '#FF0000',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    width: 280,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: -7,
    marginRight: -50,
  };

  prevBtnStyle = {
    backgroundColor: 'white',
    marginLeft: -35,
    padding: 8,
    width: 70,
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FF0000',
    textAlignVertical: 'center',
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="Place"
          onNext={() => {
            if (selectedState.length === 0) {
              this.onNextStep();
            }
          }}
          nextBtnText={'Continue'}
          nextBtnStyle={{textAlign: 'center'}}
          onPrevious={this.onPrevStep}
          previousBtnDisabled={true}
          scrollViewProps={this.defaultScrollViewProps}
          nextBtnTextStyle={nextbuttonTextStyleState}
          previousBtnTextStyle={previousbuttonTextStyle}>
          <View className="w-full h-[80%] p-5 flex -mt-44">
            <View className="w-full h-[120%] bg-[#FFF1F1] p-4 rounded-xl flex items-center">
              <Text className="text-3xl  font-semibold mt-4">
                Select the city you want to catchup?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Banglore'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStateSelection('Banglore')}>
                  {selectedState === 'Banglore' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Banglore' ? 'text-white' : ''
                    }`}>
                    Banglore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Mumbai'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStateSelection('Mumbai')}>
                  {selectedState === 'Mumbai' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Mumbai' ? 'text-white' : ''
                    }`}>
                    Mumbai
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Delhi' ? 'bg-red-500 border-red-500' : ''
                  }`}
                  onPress={() => handleStateSelection('Delhi')}>
                  {selectedState === 'Delhi' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Delhi' ? 'text-white' : ''
                    }`}>
                    Delhi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Chennai'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStateSelection('Chennai')}>
                  {selectedState === 'Chennai' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Chennai' ? 'text-white' : ''
                    }`}>
                    Chennai
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Kolkata'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStateSelection('Kolkata')}>
                  {selectedState === 'Kolkata' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Kolkata' ? 'text-white' : ''
                    }`}>
                    Kolkata
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Pune' ? 'bg-red-500 border-red-500' : ''
                  }`}
                  onPress={() => handleStateSelection('Pune')}>
                  {selectedState === 'Pune' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Pune' ? 'text-white' : ''
                    }`}>
                    Pune
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    selectedState === 'Others'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStateSelection('Others')}>
                  {selectedState === 'Others' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      selectedState === 'Others' ? 'text-white' : ''
                    }`}>
                    Others
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View className="w-full border-b-[3px] border-gray-400"></View> */}
        </ProgressStep>

        <ProgressStep
          label="Time"
          onNext={() => {
            if (whyCity.length === 0 || preferredCity.length === 0) {
              this.onNextStep();
            }
          }}
          previousBtnText={'Prev'}
          nextBtnText={'Continue'}
          previousBtnStyle={prevBtnStyle}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
          nextBtnTextStyle={nextbuttonTextStyleCity}
          previousBtnTextStyle={previousbuttonTextStyle}>
          <View className="w-full h-[80%] p-5 flex -mt-44 space-y-6">
            <View className="w-full h-[55%] bg-[#FFF1F1] p-4 rounded-xl flex items-center">
              <Text className="text-2xl  font-semibold mt-4">
                Why are you in the city?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    whyCity === 'I live here' ? 'bg-red-500 border-red-500' : ''
                  }`}
                  onPress={() => handleWhyCity('I live here')}>
                  {whyCity === 'I live here' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      whyCity === 'I live here' ? 'text-white' : ''
                    }`}>
                    I live here
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    whyCity === 'Traveling for Fun'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleWhyCity('Traveling for Fun')}>
                  {whyCity === 'Traveling for Fun' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      whyCity === 'Traveling for Fun' ? 'text-white' : ''
                    }`}>
                    Traveling for Fun
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    whyCity === 'On Business Trip'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleWhyCity('On Business Trip')}>
                  {whyCity === 'On Business Trip' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      whyCity === 'On Business Trip' ? 'text-white' : ''
                    }`}>
                    On Business Trip
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full h-[55%] bg-[#FFF1F1] p-4 rounded-xl flex items-center">
              <Text className="text-2xl  font-semibold mt-4">
                Preferred time to Catchup?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    preferredCity === 'After Office Hours'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePreferredCity('After Office Hours')}>
                  {preferredCity === 'After Office Hours' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      preferredCity === 'After Office Hours' ? 'text-white' : ''
                    }`}>
                    After Office Hours
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    preferredCity === 'Weekends'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePreferredCity('Weekends')}>
                  {preferredCity === 'Weekends' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      preferredCity === 'Weekends' ? 'text-white' : ''
                    }`}>
                    Weekends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    preferredCity === 'No Preferred Time'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePreferredCity('No Preferred Time')}>
                  {preferredCity === 'No Preferred Time' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      preferredCity === 'No Preferred Time' ? 'text-white' : ''
                    }`}>
                    No Preferred Time
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Goal"
          onNext={() => {
            if (stranger.length === 0) {
              this.onNextStep();
            }
          }}
          previousBtnStyle={prevBtnStyle}
          previousBtnText={'Prev'}
          nextBtnText={'Continue'}
          onPrevious={this.onPrevStep}
          scrollViewProps={this.defaultScrollViewProps}
          nextBtnTextStyle={nextbuttonTextStyleStranger}
          previousBtnTextStyle={previousbuttonTextStyle}>
          <View className="w-full h-[80%] p-5 flex -mt-44 space-y-6">
            <View className="w-full h-[80%] bg-[#FFF1F1] p-4 rounded-xl flex items-start">
              <Text className="text-3xl  font-semibold mt-4">
                Why do you want to meet a stranger?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    stranger === 'Explore Places around'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStranger('Explore Places around')}>
                  {stranger === 'Explore Places around' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      stranger === 'Explore Places around' ? 'text-white' : ''
                    }`}>
                    Explore Places around
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    stranger === 'Discover a friend'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStranger('Discover a friend')}>
                  {stranger === 'Discover a friend' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      stranger === 'Discover a friend' ? 'text-white' : ''
                    }`}>
                    Discover a friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    stranger === 'Find Romance Partner'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStranger('Find Romance Partner')}>
                  {stranger === 'Find Romance Partner' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      stranger === 'Find Romance Partner' ? 'text-white' : ''
                    }`}>
                    Find Romance Partner
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    stranger === 'Boost my Network'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleStranger('Boost my Network')}>
                  {stranger === 'Boost my Network' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      stranger === 'Boost my Network' ? 'text-white' : ''
                    }`}>
                    Boost my Network
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Whom"
          onPrevious={this.onPrevStep}
          previousBtnStyle={prevBtnStyle}
          previousBtnText={'Prev'}
          onSubmit={() => navigation.navigate('Home')}
          scrollViewProps={this.defaultScrollViewProps}
          nextBtnTextStyle={nextbuttonTextStyleGender}
          previousBtnTextStyle={previousbuttonTextStyle}>
          <View className="w-full h-[80%] p-5 flex -mt-44 space-y-6">
            <View className="w-full h-[60%] bg-[#FFF1F1] p-4 rounded-xl flex items-start">
              <Text className="text-2xl  font-semibold mt-4">
                Gender of person are you interested to meet?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    gender === 'Male' ? 'bg-red-500 border-red-500' : ''
                  }`}
                  onPress={() => handleGender('Male')}>
                  {gender === 'Male' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      gender === 'Male' ? 'text-white' : ''
                    }`}>
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    gender === 'Female' ? 'bg-red-500 border-red-500' : ''
                  }`}
                  onPress={() => handleGender('Female')}>
                  {gender === 'Female' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      gender === 'Female' ? 'text-white' : ''
                    }`}>
                    Female
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    gender === 'Nothing Specific'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handleGender('Nothing Specific')}>
                  {gender === 'Nothing Specific' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      gender === 'Nothing Specific' ? 'text-white' : ''
                    }`}>
                    Nothing Specific
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full h-[60%] bg-[#FFF1F1] p-4 rounded-xl flex items-start">
              <Text className="text-2xl  font-semibold mt-4">
                What kind of personality they should have?
              </Text>
              <View className="mt-4 w-full space-y-3">
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    personality === 'Fun Soul'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePersonality('Fun Soul')}>
                  {personality === 'Fun Soul' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      personality === 'Fun Soul' ? 'text-white' : ''
                    }`}>
                    Fun Soul
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    personality === 'Intellectual Mind'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePersonality('Intellectual Mind')}>
                  {personality === 'Intellectual Mind' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      personality === 'Intellectual Mind' ? 'text-white' : ''
                    }`}>
                    Intellectual Mind
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-row items-center rounded-lg p-2 bg-white border-2 border-gray-200 ${
                    personality === 'Nothing Specific'
                      ? 'bg-red-500 border-red-500'
                      : ''
                  }`}
                  onPress={() => handlePersonality('Nothing Specific')}>
                  {personality === 'Nothing Specific' && (
                    <Icon
                      name="check-circle"
                      size={15}
                      color="#fff"
                      className="mr-2"
                    />
                  )}
                  <Text
                    className={`text-base font-medium text-gray-700 ${
                      personality === 'Nothing Specific' ? 'text-white' : ''
                    }`}>
                    Nothing Specific
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

export default HomeScreen;
