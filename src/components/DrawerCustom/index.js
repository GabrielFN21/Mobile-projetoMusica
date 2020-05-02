import React from 'react';

import { ScrollView } from 'react-native';
import { Header, Content, H2 } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { Avatar, Icon } from 'react-native-elements';

import styles from './styles';

export default function DrawerCustom(props) {
    const navigation = useNavigation();

    return(
        <>
            <Header androidStatusBarColor='#3498db' style={styles.header}>
                <Avatar
                    rounded
                    source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    size={60}
                    showEditButton
                />
                <H2 style={styles.h2}>Gabriel</H2>
            </Header>
            <Content>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <DrawerItemList {...props} />
                    <DrawerItem 
                        label="Logout"
                        icon={() => (
                            <Icon 
                                name="eject"
                                size={30}
                                type="font-awesome"
                            />
                        )}
                        onPress={() => navigation.navigate('Login')}
                    />
                </ScrollView>
            </Content>
        </>
    )
}