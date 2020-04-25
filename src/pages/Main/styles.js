import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: "center",
        backgroundColor: '#fff',
    },

    box: {
        flex: 1, 
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },

    login: {
        width: 250,
        height: 50,
        justifyContent: "center",
        backgroundColor: '#6c5ce7',
        borderRadius: 8,
        marginBottom: 20
    },

    textLogin: {
        fontSize: 20,
        textAlign: "center",
        color: '#fff',
    },  

    ou: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 20
    },

    register: {
        width: 250,
        height: 50,
        justifyContent: "center",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#636e72',
        borderRadius: 8,
    },

    textRegister: {
        fontSize: 20,
        textAlign: "center",
        color: '#636e72',
    }
});

export default styles;