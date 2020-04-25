import React from 'react';

import { 
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements';

import styles from './styles';

export default function Search() {
    return(
        <View style={styles.containerSearch}>
            <TouchableOpacity style={styles.search}>
                <Icon 
                    name="search"
                    color='#fff'
                    type="font-awesome"
                />
                <Text style={styles.textIcon}>Pesquisar</Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.friend}
                placeholder="Nome do Amigo"
            />
        </View>
    );
}