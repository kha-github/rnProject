import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function TaxiPayScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                택시 결제 프래그먼트
            </Text>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
