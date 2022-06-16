import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Job } from "../models/Job";
import { Environment } from "../shared/environment";
import { themeVariables } from "../shared/styles/themeVariables";


export const JobScreen = ({ route }: { route: any }) => {
    const [job, setJob] = useState<Job>();

    const getJob = useCallback(async () => {
        const jobId = route.params.jobId;
        const response = await fetch(`${Environment.baseUrl}/jobs/${jobId}`);

        if (response?.ok) {
            const responseJson = await response.json();
            setJob(responseJson);
        }
    }, []);

    useEffect(() => {
        getJob();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{job?.name}</Text>
            <Text>{job?.description}</Text>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        backgroundColor: themeVariables.bgColor,
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: themeVariables.primaryColor,
        marginBottom: 20
    }
});