import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { JobSlider } from "../components/JobsSlider";
import { sharedStyles } from "../shared/styles/styles";
import { themeVariables } from "../shared/styles/themeVariables";

export const HomeScreen = () => {
    const spinValue = new Animated.Value(0);
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const opacityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Animated.Image
                    source={require('../../assets/logo-simple.png')}
                    style={[styles.imageContainer, {transform: [{rotate: spin}]}]}
                />
                <Animated.Text
                    style={[styles.appTitle, {opacity: opacityValue}]}
                >
                    JobNet
                </Animated.Text>
            </View>
            <Text style={sharedStyles.sectionTitle}>Newly added</Text>
            <JobSlider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    imageContainer: {
        width: 80,
        height: 80,
        marginBottom: 20
    },
    appTitle: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: '700',
        color: themeVariables.primaryDark,
        paddingBottom: 20
    }
});
