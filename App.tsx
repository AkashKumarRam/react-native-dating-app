import React, {useEffect} from 'react';
import {requestUserPermission, notificationListener} from "./src/utils/notificationServices";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../datingapp/src/components/HomeScreen";
import Home from "../datingapp/src/components/Home";
import MatchesFlatlist from "../datingapp/src/components/MatchesFlatlist";
import Chatting from './src/components/Chatting';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(()=>{
    requestUserPermission()
    notificationListener()
  },[])

  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen  name="MatchesFlatlist" component={MatchesFlatlist}  /> */}
          <Stack.Screen  name="Chatting" component={Chatting}  />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default App;
