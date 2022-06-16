import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Job } from "../models/Job";
import { themeVariables } from "../shared/styles/themeVariables";


export const JobCard = ({ job, navigation }: {job: Job, navigation?: any}) => {
    const navigateToJob = () => {
        // navigation.navigate('Job Details', { jobId: job?.id });
        navigation.navigate('Jobs', {
            screen: 'Job Details',
            params: { jobId: job.id },
          });
    };

    return (
        <TouchableOpacity onPress={navigateToJob}>
            <View style={styles.container}>
                <Text style={styles.jobTitle} numberOfLines={1}>{job?.name}</Text>
                <Text numberOfLines={1}>{job?.description}</Text>
                <Text>{job?.type}</Text>
                <Text>Required experience: {job?.requiredExperience} years</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeVariables.bgColor,
        padding: 20,
        margin: 20,
        borderRadius: 4,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    jobTitle: {
        color: themeVariables.primaryColor,
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    }
});

