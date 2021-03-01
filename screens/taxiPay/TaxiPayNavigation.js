import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaxiPayScreen from './TaxiPayScreen'


const TaxiPayNav = createStackNavigator();

export const TaxiPayNavigation = () => {
    return(
        <NavigationContainer>
            <TaxiPayNav.Navigator>
                <TaxiPayNav.Screen
                    name="TaxiPayScreen"
                    component={TaxiPayScreen}
                    options={{ headerShown: false }}/>
            </TaxiPayNav.Navigator>
        </NavigationContainer>
    );
}