import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { FormEditor } from "./FormBuilder/FormEditor";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="FormEditor"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="FormEditor"
                component={FormEditor}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);