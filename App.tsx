import React, {useEffect, useState} from 'react';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationServices';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import Home from './src/components/Home';
import MatchesFlatlist from './src/components/MatchesFlatlist';
import Chatting from './src/components/Chatting';
import OtpVerification from './src/components/OtpVerification';
import Login from './src/components/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen  name="MatchesFlatlist" component={MatchesFlatlist}  /> */}
        {/* <Stack.Screen  name="Chatting" component={Chatting}  /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
