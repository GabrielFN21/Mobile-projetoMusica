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

    content: {
        flex: 1, 
        alignItems: "center",
    },

    list: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 20
    }, 

    firstSection: {
        marginTop: 50
    },

    mondaySection: {
        marginTop: 50
    },

    thirdSection: {
        marginTop: 50,
        marginBottom: 50
    }, 

    h2: {
        alignSelf: "center",
        fontWeight: "bold",
        marginBottom: 10
    },

    message: {
        textAlign: "center"
    }
});

export default styles;