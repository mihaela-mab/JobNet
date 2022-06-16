import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Job } from "../models/Job";
import { themeVariables } from "../shared/styles/themeVariables";
import { sharedStyles } from "../shared/styles/styles";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";


export const JobCard = ({ job, navigation }: {job: Job, navigation?: any}) => {
    const navigateToJob = () => {
        navigation.navigate('Jobs', {
            screen: 'Job Details',
            params: { jobId: job.id },
          });
    };

    return (
        <TouchableOpacity onPress={navigateToJob}>
            <View style={sharedStyles.cardContainer}>
                <View style={styles.jobTypeIcon}>
                    {
                        job?.type === 'remote'
                            ? <AntDesignIcon name="home" size={20} style={styles.icon} />
                            : job?.type === 'office'
                                ? <MaterialIcon name="office-building-marker" size={20} style={styles.icon}/>
                                : (
                                    <View style={{flexDirection: 'row'}}>
                                        <AntDesignIcon name="home" size={20} style={styles.icon} />
                                        <AntDesignIcon name="plus" size={20} style={styles.icon} />
                                        <MaterialIcon name="office-building-marker" size={20} style={styles.icon}/>
                                    </View>
                                )
                    }
                </View>
                <Text style={styles.jobTitle} numberOfLines={1}>{job?.name}</Text>
                <Text numberOfLines={1}>{job?.description}</Text>
                <Text>Required experience: {job?.requiredExperience} years</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    jobTitle: {
        color: themeVariables.primaryColor,
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },
    jobTypeIcon: {
        alignSelf: 'flex-end',
        position: "absolute",
        padding: 10
    }
});

