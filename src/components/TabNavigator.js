import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Friends from '../pages/Friends';
import MakeFriends from '../pages/MakeFriends';

import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator 
            initialRouteName="Friends"
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'gray',
                style: {
                    padding: 10,
                    height: 60,
                    backgroundColor: '#3498db',
                }
            }}       
        >
            <Tab.Screen 
                name="Friends"
                component={Friends}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name="users"
                            color='#fff'
                            type="font-awesome"
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Make Friends"
                component={MakeFriends}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name="user-plus"
                            color='#fff'
                            type="font-awesome"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}