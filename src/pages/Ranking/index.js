import React from 'react';

import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { Header, H1, H2 } from 'native-base';

import { Icon } from 'react-native-elements';

import { DrawerActions } from '@react-navigation/native';

import styles from './styles';

export default function Ranking({ navigation }) {
    const data = [
        { id: '0', name: 'Rodolfo', pontos: '200' },
        { id: '1', name: 'Emerson', pontos: '150' },
        { id: '2', name: 'Gabriel', pontos: '145' },
        { id: '3', name: 'Thiago', pontos: '120' },
        { id: '4', name: 'Rick', pontos: '50' },
        { id: '5', name: 'Morty', pontos: '23' },
    ]

    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#3498db' 
                style={styles.header}
            >
                <H1 style={styles.h1}>Ranking</H1>
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
                                <View style={styles.box}>
                                    <Icon 
                                        raised
                                        name="user"
                                        type="font-awesome"
                                    />
                                    <H2>{item.name}</H2>
                                    <Text style={styles.points}>{item.pontos}</Text>
                                </View>
                            );
                        }}
                    />
                </SafeAreaView>               
            </View>
        </View>
    );
}