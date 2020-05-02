import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
});

export default styles;