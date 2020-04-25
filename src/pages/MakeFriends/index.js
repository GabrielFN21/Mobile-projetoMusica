import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Header, H1, H2 } from 'native-base';

import { DrawerActions } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

import styles from './style';

export default function MakeFriends({ navigation }) {
    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#6c5ce7' 
                style={styles.header}
            >
                <TouchableOpacity> 
                    <Icon 
                        name="search"
                        color='#fff'
                        type="font-awesome"
                    />
                </TouchableOpacity>
                <H1 style={styles.h1}>Make Friends</H1>
                <Icon 
                    name="align-justify"
                    color='#fff'
                    iconStyle={{ marginRight: 5 }}
                    type="font-awesome"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                />
            </Header>
            <View style={styles.content}>
                <H2 style={styles.h2}>Faça amizades</H2>
                <View style={styles.group}>
                    <Text style={styles.notice}>Procure por pessoas no icone</Text>
                    <Icon 
                        name="search"
                        size={40}
                        type="font-awesome"    
                    />
                </View>
            </View>
        </View>
    )
}