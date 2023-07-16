import { Dimensions, StyleSheet } from "react-native";

const screenHeight  = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    icon: {
        marginBottom: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black',
    },
    indicator: {
        marginTop: 10,
    },
    logoImage: {
        width: screenWidth * 0.75,
        height: screenWidth * 0.75,
        borderRadius: 5,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButton: {
        width: 150,
        padding: 10,
    },
    startButtonText: {
        textTransform: 'capitalize',
        fontSize: 20,
    }
})