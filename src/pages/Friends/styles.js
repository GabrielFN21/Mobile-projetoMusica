import { StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row', 
        backgroundColor: '#6c5ce7',
        alignItems: "center",
        justifyContent: "space-between"
    },

    h1: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        color: '#fff'
    }, 

    content:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    scroll: {
        width: '100%'
    },

    friend: {
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
    },  

    friendProperty: {
        flex: 1,
        justifyContent: "center",
    },

    name: {
        fontSize: 18,
        fontWeight: "bold"
    },

    rank: {
        alignSelf: "flex-start",
        fontSize: 25,
        fontWeight: "bold",
    }
});

export default styles;