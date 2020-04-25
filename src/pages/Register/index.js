import React from 'react';

import { 
    View, 
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity 
} from 'react-native';

import { Icon } from 'react-native-elements';

import { Picker } from 'native-base';

import styles from './styles';

export default function Register({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor='#fff'
            />
            <View style={styles.icons}>
                <Icon
                    name="user"
                    type="font-awesome"
                />
                <TextInput
                    style={styles.name}
                    placeholder="Nome para usuario"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.icons}>
                <Icon
                    name="key"
                    type="font-awesome"
                />
                <TextInput
                    style={styles.password}
                    placeholder="Senha para usuario"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.pickerStyle}> 
                <Icon 
                    name="home"
                    type="font-awesome"
                />
                <Picker style={styles.comum}>
                    <Picker.Item 
                        label="Selecione sua Comum"
                    />
                </Picker>
            </View>
            <TouchableOpacity 
                style={styles.register}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.textRegister}>Cadastra</Text>
            </TouchableOpacity>
        </View>
    );
}