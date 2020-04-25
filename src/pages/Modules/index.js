import React from 'react';

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header, H1, H2 } from 'native-base';

import { Icon } from 'react-native-elements';

import { DrawerActions } from '@react-navigation/native';

import styles from './styles';

export default function Modules({ navigation }) {
    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#6c5ce7' 
                style={styles.header}
            >
                <H1 style={styles.h1}>Modules</H1>
                <Icon 
                    name="align-justify"
                    color='#fff'
                    iconStyle={{ marginRight: 5 }}
                    type="font-awesome"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                />
            </Header>
            <ScrollView>
                <View style={styles.content}>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.module}>
                                <H2 style={styles.title}>Modulo 1</H2>
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cupiditate reprehenderit reiciendis modi officiis asperiores 
                                    delectus fuga inventore.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.module}>
                                <H2 style={styles.title}>Modulo 2</H2>
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cupiditate reprehenderit reiciendis modi officiis asperiores 
                                    delectus fuga inventore.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.module}>
                                <H2 style={styles.title}>Modulo 3</H2>
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cupiditate reprehenderit reiciendis modi officiis asperiores 
                                    delectus fuga inventore.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.module}>
                                <H2 style={styles.title}>Modulo 4</H2>
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cupiditate reprehenderit reiciendis modi officiis asperiores 
                                    delectus fuga inventore.
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
        </View>
    );
}