import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Environment } from "../shared/environment";
import { sharedStyles } from "../shared/styles/styles";
import { Button } from 'react-native-elements';
import { themeVariables } from "../shared/styles/themeVariables";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { storeJobsAction } from "../state/actions/job";

const renderItem = ({ item }) => {
    return (
        <View style={[sharedStyles.cardContainer, styles.itemContainer]}>
            <View>
                <Text style={sharedStyles.cardTitle}>{ item.name }</Text>
                <View style={styles.cardSection}>
                    {
                        item?.type === 'remote'
                            ? <AntDesignIcon name="home" size={20} style={styles.icon} />
                            : item?.type === 'office'
                                ? <MaterialIcon name="office-building-marker" size={20} style={styles.icon}/>
                                : (
                                    <View style={{flexDirection: 'row'}}>
                                        <AntDesignIcon name="home" size={20} style={styles.icon} />
                                        <AntDesignIcon name="plus" size={20} style={styles.icon} />
                                        <MaterialIcon name="office-building-marker" size={20} style={styles.icon}/>
                                    </View>
                                )
                    }
                    <Text>{ item?.type }</Text>
                </View>
                <View style={styles.cardSection}>
                    <Text style={styles.textExperience}>
                        { item?.requiredExperience > 0
                            ? item.requiredExperience.toString() + (item.requiredExperience === 1 ? ' year' : ' years')
                            : 'no'
                        }
                    </Text>
                    <Text> experience required</Text>
                </View>
            </View>
            <Button
                title={'Details'}
                buttonStyle={[sharedStyles.primaryButton, styles.button]}
                onPress={() => {}}
            />
        </View>
    )
}

export const JobSlider = () => {
    const { isGetJobsRequestReady, jobs } = useSelector(state => state.jobsReducer);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const dispatch = useDispatch();

    const getJobs = useCallback(async () => {
        const response = await fetch(`${Environment.baseUrl}/jobs`);

        if (response.ok) {
            const jobsList = await response.json();
            dispatch(storeJobsAction(jobsList));
        }
    }, []);

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <View style={styles.container}>
            <Carousel
                data={jobs}
                renderItem={(item) => renderItem(item)}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                windowSize={1}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={jobs?.length}
                activeDotIndex={activeSlide}
                dotStyle={styles.pagination}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        fontWeight: '700',
    },
    container: {
        height: 320,
    },
    itemContainer: {
        justifyContent: "space-between",
        borderLeftWidth: 3,
        borderLeftColor: themeVariables.primaryColor,
        borderStyle: "solid"
    },
    pagination: {
        backgroundColor: themeVariables.primaryColor,
        borderRadius: 50,
        width: 10,
        height: 10,
        bottom: 20
    },
    icon: {
        color: themeVariables.primaryColor,
        marginRight: 5
    },
    textExperience: {
        fontWeight: '700',
    },
    cardSection: {
        flexDirection: 'row',
        marginBottom: 10
    }
})