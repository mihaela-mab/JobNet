import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { JobCard } from "../components/JobCard";
import { Job } from "../models/Job";
import { Environment } from "../shared/environment";

export const JobsListingScreen = ({ navigation }: { navigation: any}) => {
    const [jobs, setJobs] = useState<Array<Job>>([]);

    const getJobs = useCallback(async () => {
        const response = await fetch(`${Environment.baseUrl}/jobs`);

        if (response.ok) {
            const jobsList = await response.json();
            console.log(jobsList);
            setJobs(jobsList);
        }
    }, []);

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={jobs}
                keyExtractor={job => job.id.toString()}
                renderItem={({ item }) => (
                    <JobCard
                      job={item}
                      navigation={navigation}
                    />
                  )}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    }
})