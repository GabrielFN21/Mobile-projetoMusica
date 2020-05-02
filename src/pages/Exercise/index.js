import React from 'react';

import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import { H1 } from 'native-base';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Exercise() {
    const data = [
        { id: '0', exercise: 'Exercise 1' },
        { id: '1', exercise: 'Exercise 2' },
        { id: '2', exercise: 'Exercise 3' },
        { id: '3', exercise: 'Exercise 4' },
        { id: '4', exercise: 'Exercise 5' },
        { id: '5', exercise: 'Exercise 6' },
        { id: '6', exercise: 'Exercise 7' },
        { id: '7', exercise: 'Exercise 8' },
    ];

    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor='#fff'
            />
            <H1 style={styles.title}>Exercises</H1>
            <Text style={styles.question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam architecto 
                distinctio minima ipsum modi. Ad, tempore voluptatum, facere unde ducimus neque eum magnam 
                temporibus sunt deserunt molestias iusto suscipit.
            </Text>
            <View style={styles.group}>
                <TouchableOpacity style={styles.answer}>
                    <Text style={styles.alternative}>Resposta A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer}>
                    <Text style={styles.alternative}>Resposta B</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer}>
                    <Text style={styles.alternative}>Resposta C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer}>
                    <Text style={styles.alternative}>Resposta D</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.content}>
                <FlatList 
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return(
                            <View style={styles.box}>
                                <Icon 
                                    name="question-circle"
                                    type="font-awesome"
                                />
                                <Text>{item.exercise}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}