/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabProfileScreen from "../screens/TabProfileScreen";
import {} from "../types";
import LoginScreen from "../screens/LoginScreen";

const LoginStack = createStackNavigator<{
    LoginScreen: undefined;
}>();

export function LoginNavigator() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
        </LoginStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<{
    Home: undefined;
    Search: undefined;
    Profile: undefined;
}>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="Home"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={TabProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="link" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>["name"];
    color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<{
    TabOneScreen: undefined;
}>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: "Home" }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<{
    TabTwoScreen: undefined;
}>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: "Search" }}
            />
        </TabTwoStack.Navigator>
    );
}
const TabProfileStack = createStackNavigator<{
    TabProfileScreen: undefined;
}>();

function TabProfileNavigator() {
    return (
        <TabProfileStack.Navigator>
            <TabProfileStack.Screen
                name="TabProfileScreen"
                component={TabProfileScreen}
                options={{ headerTitle: "Profile" }}
            />
        </TabProfileStack.Navigator>
    );
}
