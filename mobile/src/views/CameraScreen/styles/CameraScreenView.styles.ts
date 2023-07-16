import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: "white",
    },
    bottomContainer: {
        flexDirection: 'row', 
        width: '100%', 
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
    },
    searchButton: {
        height: 80,
        width: 80,
        borderWidth: 0,
        borderRadius: 70,
        aligSelf: 'flex-start',
        margiBottom: 10,
        backgroundColor: 'red',
    },
    searchButtonLabel: {
        textTransform: 'capitalize',
    },
})