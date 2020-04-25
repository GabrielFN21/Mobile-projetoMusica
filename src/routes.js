import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

import Drawer from './components/DrawerNavigation';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Main"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                />
                <Stack.Screen 
                    name="Home"
                    component={Drawer}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
