import React, { useCallback, useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Share} from "react-native";
import { Job } from "../models/Job";
import { Environment } from "../shared/environment";
import { themeVariables } from "../shared/styles/themeVariables";
import { sharedStyles } from "../shared/styles/styles";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { setJSExceptionHandler } from "react-native-exception-handler";

const Benefit = (benefit: any) => {
    return (
      <View style={styles.benefitsContainer}>
          <AntDesignIcon name="checkcircle" size={20} style={styles.bulletIcon} />
          <Text style={styles.benefitItem}>{benefit.benefit.name}</Text>
      </View>
    );
}

export const JobScreen = (props: any) => {
    const [job, setJob] = useState<Job>();

    const getJob = useCallback(async () => {
        const jobId = props.route.params.jobId;
        const response = await fetch(`${Environment.baseUrl}/jobs/${jobId}`);

        if (response?.ok) {
            const responseJson = await response.json();
            setJob(responseJson);
        } else {
            alert('There was an error. Please try again later.');
            setTimeout(() => props.navigation.goBack(), 1000);
        }
    }, []);

    useEffect(() => {
        getJob();
    }, []);

    const onShare = async () => {
        try {
            await Share.share({
                message: 'Check out this job!',
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.sectionContainer}>
                    <TouchableOpacity onPress={onShare}>
                        <Ionicons name={'share'} size={35} style={styles.shareIcon}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>{job?.name}</Text>
                    <Text>{job?.description}</Text>
                </View>
                <View>
                    <Text style={sharedStyles.sectionTitle}>Benefits</Text>
                    <View style={styles.sectionContainer}>
                        <FlatList
                            data={job?.benefits}
                            keyExtractor={(benefit) => benefit.id.toString()}
                            renderItem={({ item }) => <Benefit benefit={item}/>}
                        />
                    </View>
                </View>
                <View>
                    <Text style={sharedStyles.sectionTitle}>Requirements</Text>
                </View>
                <View>
                    <Text style={sharedStyles.sectionTitle}>Responsibilities</Text>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: themeVariables.bgColor,
        flex: 1,
    },
    sectionContainer: {
        paddingHorizontal: 20,
        position: 'relative',
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: themeVariables.primaryColor,
        marginVertical: 20
    },
    icon: {
        alignSelf: "flex-end",
        marginRight: 20,
        bottom: 75,
        color: themeVariables.primaryDark
    },
    benefitsContainer: {
        flexDirection: 'row',
    },
    benefitItem: {
      fontSize: 15,
      marginBottom: 15
    },
    bulletIcon: {
        marginRight: 15,
        color: themeVariables.green,
    },
    sectionTitle: {
        marginBottom: 20
    },
    shareIcon: {
        position: "absolute",
        right: 10,
        top: 10,
        color: themeVariables.primaryDark
    }
});