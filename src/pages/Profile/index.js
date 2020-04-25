import React from 'react';

import { View, Text } from 'react-native';
import { Header, H1 } from 'native-base';

import { Icon } from 'react-native-elements';

import { DrawerActions } from '@react-navigation/native';

import styles from './styles';

export default function Profile({ navigation }) {
    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#6c5ce7' 
                style={styles.header}
            >
                <H1 style={styles.h1}>Profile</H1>
                <Icon 
                    name="align-justify"
                    color='#fff'
                    iconStyle={{ marginRight: 5 }}
                    type="font-awesome"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                />
            </Header>
            <View style={styles.content}>
                <Text>Page Profile</Text>
            </View>
        </View>
    );
}