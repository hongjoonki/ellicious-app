import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search/SearchContainer";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import { createStackNavigator } from "react-navigation-stack";
import MessagesLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) =>
    createStackNavigator({
        initialRoute: {
            screen: initialRoute,
            navigationOptions: { ...customConfig }
        }
    });

export default createBottomTabNavigator({
    Search: {
        screen: stackFactory(Search)
    },
    Home: {
        screen: stackFactory(Home, {
            title: "Home",
            headerRight: <MessagesLink />
        })
    },
    
    Add: {
        screen: View,
        navigationOptions: {
            tabBarOnPress: ({navigation}) => navigation.navigate("PhotoNavigation")
        }
    },
    Notifications: {
        screen: stackFactory(Notifications, {
            title: "Notifications"
        })
    },
    Profile: {
        screen: stackFactory(Profile, {
            title: "Profile"
        })
    }
});
