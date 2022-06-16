import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const FadeInAnimation= (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            { toValue: 1, duration: 1000, useNativeDriver: false }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}
