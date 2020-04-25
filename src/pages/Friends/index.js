import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import { Header, H1 } from 'native-base';

import { DrawerActions } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Friends({ navigation }) {
    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#6c5ce7' 
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
                <ScrollView
                    style={styles.scroll} 
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View> 
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                    <View style={styles.friend}>
                        <Icon 
                            raised
                            name="user"
                            type="font-awesome"
                        />
                        <View style={styles.friendProperty}>
                            <Text style={styles.name}>Rodolfo</Text>
                            <Text style={styles.points}>23 pontos</Text>
                        </View>
                        <Text style={styles.rank}>#1</Text>
                    </View>
                </ScrollView>
            </View> 
        </View>
    );
}