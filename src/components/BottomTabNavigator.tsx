import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../screens/Home';
import { JobsListingScreen } from "../screens/JobsListing";
import { ProfileScreen } from "../screens/Profile";
import { Image } from "react-native";
import { JobScreen } from "../screens/Job";

const BottomTabs = createBottomTabNavigator();
const JobsStack = createStackNavigator();

const JobsStackScreen = () => (
    <JobsStack.Navigator>
        <JobsStack.Screen name="Jobs Listing" component={JobsListingScreen}/>
        <JobsStack.Screen name="Job Details" component={JobScreen}/>
    </JobsStack.Navigator>
);

export const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="Home"
                component={HomeScreen} 
                options={{
                    tabBarIcon: () => (<Image source={require("../../assets/logo-simple.png")} style={{width: 35, height: 35}} />)
                }}
            />
            <BottomTabs.Screen
                name="Jobs"
                component={JobsStackScreen}
                options={{
                    tabBarIcon: () => (<Image source={require('../../assets/loupe.png')} style={{width: 30, height: 30}}/>),
                    headerShown: false
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileScreen} 
                options={{
                    tabBarIcon: () => (<Image source={require('../../assets/user.png')} style={{width: 30, height: 30}}/>)
                }}
            />
        </BottomTabs.Navigator>
    );
};
