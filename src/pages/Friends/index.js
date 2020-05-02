import React from 'react';

import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Header, H1 } from 'native-base';

import { DrawerActions } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Friends({ navigation }) {
    const data = [
        { id: '0', name: 'Rodolfo', points: 200 },
        { id: '1', name: 'Emerson', points: 150 },
        { id: '2', name: 'Morty', points: 23 },
        { id: '3', name: 'Thiaguinho', points: 23 },
        { id: '4', name: 'João', points: 23 },
        { id: '5', name: 'Pedro', points: 23 },
        { id: '6', name: 'Rick', points: 50 },
        { id: '7', name: 'Vinicius', points: 23 },
    ]

    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#3498db' 
                style={styles.header}
            >
                <H1 style={styles.h1}>Friends</H1>
                <Icon 
                    name="align-justify"
                    color='#fff'
                    iconStyle={{ marginRight: 5 }}
                    type="font-awesome"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                />
            </Header>
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList 
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return(
                                <View style={styles.friend}>
                                    <Icon 
                                        raised
                                        name="user"
                                        type="font-awesome"
                                    />
                                    <View style={styles.friendProperty}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.points}>{item.points} pontos</Text>
                                    </View>
                                    <Text style={styles.rank}>#1</Text>
                                </View> 
                            );
                        }}
                    />
                </SafeAreaView>
            </View> 
        </View>
    );
}