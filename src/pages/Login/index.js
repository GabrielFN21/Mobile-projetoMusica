import React from 'react';

import { 
    View,
    Text, 
    TextInput,
    StatusBar,
    TouchableOpacity 
} from 'react-native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor='#fff'
            />
            <View style={styles.inputStyle}>
                <Icon
                    name="user"
                    type="font-awesome"
                />
                <TextInput
                    style={styles.name}
                    placeholder="Digite seu nome"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputStyle}>
                <Icon
                    name="key"
                    type="font-awesome"
                />
                <TextInput
                    style={styles.password}
                    placeholder="Digite sua senha"
                    underlineColorAndroid="transparent"
                />
            </View>
            <TouchableOpacity 
                style={styles.open}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textOpen}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}