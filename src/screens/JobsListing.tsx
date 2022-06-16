import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { JobCard } from "../components/JobCard";
import { FadeInAnimation } from "../components/animations/FadeIn";
import { useSelector } from "react-redux";

export const JobsListingScreen = ({ navigation }: { navigation: any}) => {
    const { isGetJobsRequestReady, jobs } = useSelector(state => state.jobsReducer);

    return (
        <View style={styles.container}>
            <FlatList 
                data={jobs}
                keyExtractor={job => job.id.toString()}
                renderItem={({ item }) => (
                    <FadeInAnimation>
                        <JobCard
                            job={item}
                            navigation={navigation}
                        />
                    </FadeInAnimation>
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