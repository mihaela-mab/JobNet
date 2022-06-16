import React from "react";
import { StyleSheet } from "react-native";
import { themeVariables } from "./themeVariables";

export const sharedStyles = StyleSheet.create({
    spacerVertical: {
        marginVertical: 20
    },
    cardContainer: {
        flex: 1,
        backgroundColor: themeVariables.bgColor,
        padding: 20,
        margin: 20,
        borderRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardTitle: {
        color: themeVariables.primaryColor,
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        marginVertical: 20,
        fontWeight: '700',
    },
    primaryButton: {
        padding: 10,
        backgroundColor: themeVariables.primaryColor,
        color: themeVariables.white,
    },
    sectionTitle: {
        padding: 20,
        backgroundColor: themeVariables.primaryColor,
        color: themeVariables.white,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.5,
        marginBottom: 20
    },
})