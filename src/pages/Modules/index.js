import React from 'react';

import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Header, H1, H2 } from 'native-base';

import { Icon } from 'react-native-elements';

import { DrawerActions } from '@react-navigation/native';

import styles from './styles';

export default function Modules({ navigation }) {
    const data = [
        { id: '0', title: 'Modulo 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '1', title: 'Modulo 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '2', title: 'Modulo 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '3', title: 'Modulo 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '4', title: 'Modulo 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '5', title: 'Modulo 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
        { id: '6', title: 'Modulo 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, est quisquam! Facilis sapiente molestiae at dolore laudantium et impedit alias, molestias pariatur velit distinctio neque repellendus, nulla recusandae harum iste.' },
    ];

    return(
        <View style={styles.container}>
            <Header  
                androidStatusBarColor='#3498db' 
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
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return(
                                <View style={styles.box}>
                                    <TouchableOpacity 
                                        style={styles.module}
                                        onPress={() => navigation.navigate('Exercise')}
                                    >
                                        <H2 style={styles.title}>{item.title}</H2>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
}