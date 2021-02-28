import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomeNavgation} from "./home/HomeNavigation";

export default function RootScreen() {
    return (
        <HomeNavgation/>
    );
}
