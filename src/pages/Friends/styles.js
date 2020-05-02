import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row', 
        backgroundColor: '#3498db',
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