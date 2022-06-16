import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../screens/Home';
import { JobsListingScreen } from "../screens/JobsListing";
import { JobScreen } from "../screens/Job";
import { InterviewsScreen } from "../screens/InterviewsScreen";
import { ProfileScreen } from "../screens/Profile";
import { Image } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";


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
                    tabBarIcon: () => (<IonIcon name={'search'} size={30} />),
                    headerShown: false
                }}
            />
            <BottomTabs.Screen
                name="Interviews"
                component={InterviewsScreen}
                options={{
                    tabBarIcon: () => (<MaterialIcon name={'desktop-mac'} size={30}/>)
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileScreen} 
                options={{
                    tabBarIcon: () => (<FontAwesomeIcon name={'user-circle-o'} size={30}/>)
                }}
            />
        </BottomTabs.Navigator>
    );
};
