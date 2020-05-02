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
        alignItems: "center",
    },

    list: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 20
    }, 

    firstSection: {
        flex: 1,
        marginTop: 50
    },

    mondaySection: {
        flex: 2,
        marginTop: 50
    },

    thirdSection: {
        flex: 1,
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