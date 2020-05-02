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

    content: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    h2: {
        fontWeight: "bold",
        marginBottom: 10
    },
    
    group: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    notice: {
        fontSize: 15,
        padding: 10
    }
});

export default styles;