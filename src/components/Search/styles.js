import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerSearch: {
        width: 300,
        height: 50,
        padding: 5,
        flexDirection: 'row',
        alignItems: "center"
    },

    search: {
        width: 120,
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6c5ce7',
        borderRadius: 5
    },

    textIcon: {
        color: '#fff',
        marginLeft: 5
    },

    friend: {
        flex: 1,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 5
    }
});

export default styles;