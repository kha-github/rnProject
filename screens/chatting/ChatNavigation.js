import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './ChatScreen'


const ChatNav = createStackNavigator();

export const ChatNavigation = () => {
    return(
        <NavigationContainer>
            <ChatNav.Navigator>
                <ChatNav.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{ headerShown: false }}/>
            </ChatNav.Navigator>
        </NavigationContainer>
    );
}