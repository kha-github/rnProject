import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from './SettingScreen'


const SettingNav = createStackNavigator();

export const SettingNavigation = () => {
    return(
        <NavigationContainer>
            <SettingNav.Navigator>
                <SettingNav.Screen
                    name="SettingScreen"
                    component={SettingScreen}
                    options={{ headerShown: false }}/>
            </SettingNav.Navigator>
        </NavigationContainer>
    );
}