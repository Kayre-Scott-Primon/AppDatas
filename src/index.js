import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'

// pages
import Main from "./screens/main";
import Splash from "./screens/splash";
import Network from './screens/network'
import Sensors from './screens/sensors';
import InfoApp from './screens/infoApp';
import Hardware from "./screens/hardware";
import Satellite from "./screens/satellite"
import Bluetooth from "./screens/bluetooth";
import WiFi from "./screens/wifi";

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={Main} options={{headerLeft: () => (<View/>), headerShown: false}}/>
            <Stack.Screen name="Bluetooth" component={Bluetooth} options={{headerShown: false}}/>
            <Stack.Screen name="Sensors" component={Sensors} options={{headerShown: false}}/>
            <Stack.Screen name="Hardware" component={Hardware} options={{headerShown: false}}/>
            <Stack.Screen name="InfoApp" component={InfoApp} options={{headerShown: false}}/>
            <Stack.Screen name="Satellite" component={Satellite} options={{headerShown: false}}/>
            <Stack.Screen name="Network" component={Network} options={{headerShown: false}}/>
            <Stack.Screen name="Wifi" component={WiFi} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default App