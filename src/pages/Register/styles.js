import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    },

    icons: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        width: 250,
        height: 50,
        borderRadius: 5,
        margin: 10
    },

    name: {
        flex: 1,
        padding: 10,
    },

    password: {
        flex: 1,
        padding: 10,
    },

    pickerStyle: {
        flexDirection: 'row',
        alignItems: "center",
        width: 250,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        marginTop: 20
    },

    comum: {
        flex: 1,
    },

    register: {
        width: 250,
        height: 80,
        justifyContent: "center",
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginTop: 40,
    },

    textRegister: {
        fontSize: 40,
        textAlign: "center",
        color: '#fff',
    }
});

export default styles;