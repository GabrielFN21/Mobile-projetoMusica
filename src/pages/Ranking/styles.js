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
        alignItems: "center"
    },

    box: {
        width: 250,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginTop: 40,
        alignItems: "center",
        backgroundColor: '#ecf0f1'
    },

    points: {
        fontWeight: "bold"
    }
});

export default styles;