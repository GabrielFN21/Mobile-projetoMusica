import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import { Header, H1, H2 } from 'native-base';

import { DrawerActions } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#6c5ce7' 
                style={styles.header}
            >
                <H1 style={styles.h1}>Home</H1>
                <Icon 
                    name="align-justify"
                    color='#fff'
                    iconStyle={{ marginRight: 5 }}
                    type="font-awesome"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                />
            </Header>
            <View style={styles.content}>
                <ScrollView style={styles.list}>
                    <Image />
                    <View style={styles.firstSection}>
                        <H2 style={styles.h2}>Aprenda música</H2> 
                        <Text style={styles.message}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numquam aliquid repudiandae perferendis suscipit sed? 
                            Asperiores, dignissimos qui ab vel nemo eaque pariatur rem rerum, 
                            voluptatem expedita, libero numquam aliquam!
                        </Text>
                    </View>
                    <View style={styles.mondaySection}>
                        <H2 style={styles.h2}>Suba no Rank</H2> 
                        <Text style={styles.message}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numquam aliquid repudiandae perferendis suscipit sed? 
                            Asperiores, dignissimos qui ab vel nemo eaque pariatur rem rerum, 
                            voluptatem expedita, libero numquam aliquam!
                        </Text>
                    </View>
                    <View style={styles.thirdSection}>
                        <H2 style={styles.h2}>Faça amizades</H2> 
                        <Text style={styles.message}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rem numquam aliquid repudiandae perferendis suscipit sed? 
                            Asperiores, dignissimos qui ab vel nemo eaque pariatur rem rerum, 
                            voluptatem expedita, libero numquam aliquam!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}