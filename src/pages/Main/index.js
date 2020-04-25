import React from 'react';

import { 
    View, 
    Image,
    Text, 
    StatusBar,
    TouchableOpacity 
} from 'react-native';

import Logo from '../../../assets/Logo.png';

import styles from './styles';

export default function Main({ navigation }) {
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content" 
                backgroundColor='#fff'
            />
            <View style={styles.box}>
                <Image
                    resizeMode="contain"
                    style={{  height: 300 }}
                    source={Logo} 
                    alt='Imagem de Música' 
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity 
                    style={styles.login}
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.ou}>Ou</Text>
                <TouchableOpacity 
                    style={styles.register}
                    title="Cadastro"
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.textRegister}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}