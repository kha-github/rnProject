import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'


const HomeNav = createStackNavigator();

export const HomeNavgation = () => {
    return(
        <NavigationContainer>
            <HomeNav.Navigator>
                <HomeNav.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}/>
            </HomeNav.Navigator>
        </NavigationContainer>
    );
}