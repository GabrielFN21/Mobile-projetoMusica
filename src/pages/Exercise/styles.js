import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        marginTop: 40
    },

    title: {
        textAlign: "center",
    },

    question: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1
    },

    group: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },

    answer: {
        minWidth: '50%',
        minHeight: '50%',
        borderWidth: 1,
    },

    alternative: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1
    },

    content: {
    },

    box: {
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;