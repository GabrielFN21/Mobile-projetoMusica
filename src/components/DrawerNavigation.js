import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Modules from '../pages/Modules';
import Profile from '../pages/Profile';
import Ranking from '../pages/Ranking';

import { Icon } from 'react-native-elements';

import DrawerCustom from './DrawerCustom';

import Tab from '../components/TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return(
        <Drawer.Navigator 
            initialRouteName="Home" 
            drawerContent={(props) => <DrawerCustom {...props} />}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    drawerIcon: () => (
                        <Icon 
                            name="home"
                            size={30}
                            type="font-awesome"
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Modules" 
                component={Modules}
                options={{
                    drawerIcon: () => (
                        <Icon 
                            name="music"
                            size={30}
                            type="font-awesome"
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    drawerIcon: () => (
                        <Icon 
                            name="user"
                            size={30}
                            type="font-awesome"
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Ranking" 
                component={Ranking} 
                options={{
                    drawerIcon: () => (
                        <Icon 
                            name="star"
                            size={30}
                            type="font-awesome"
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Friends" 
                component={Tab}
                options={{
                    drawerIcon: () => (
                        <Icon 
                            name="users"
                            size={30}
                            type="font-awesome"
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
};
