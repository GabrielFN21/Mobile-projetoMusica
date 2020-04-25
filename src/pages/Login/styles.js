import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
    },

    inputStyle: {
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

    open: {
        width: 250,
        height: 70,
        justifyContent: "center",
        backgroundColor: '#6c5ce7',
        borderRadius: 10,
        marginTop: 40,
    },

    textOpen: {
        fontSize: 35,
        textAlign: "center",
        color: '#fff',
    }
});

export default styles;