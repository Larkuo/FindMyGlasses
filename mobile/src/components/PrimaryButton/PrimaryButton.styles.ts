import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        margin: 5,
    },
    outlineContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
    },
    outlineDisabledContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'gray',
    },
    filledContainer: {
        backgroundColor: 'black',
    },
    filledDisabledContainer: {
        backgroundColor: 'gray',
    },
    loader: {
        marginRight: 10,
    },
    title: {
        fontSize: 14,
        textTransform: 'lowercase',
        fontWeight: '600',
    },
    outlineTitle: {
        color: 'black',
    },
    filledTitle: {
        color: 'white',
    },
    disabledTitle: {
        color: 'rgba(0, 0, 0, 0.8)',
    }
});