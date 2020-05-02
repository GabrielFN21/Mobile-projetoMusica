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
        paddingHorizontal: 20,
    },

    box: {
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#ecf0f1'
    },

    module: {
        borderRadius: 5,
    },

    title: {
        textAlign: "center",
        fontWeight: "bold"
    },

    description: {
        textAlign: "center",
        marginTop: 10,
    
    }
});

export default styles;