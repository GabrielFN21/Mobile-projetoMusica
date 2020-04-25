import { StyleSheet } from 'react-native';

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
        width: 250,
        borderWidth: 2,
        flexDirection: "row",
        flexWrap: "wrap"
    },

    box: {
        flex: 1,
        minWidth: 100,
        minHeight: 100   
    },

    module: {
        //borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },

    title: {
        fontWeight: "bold"
    },

    description: {
        marginTop: 10,
        color: 'gray'
    }
});

export default styles;