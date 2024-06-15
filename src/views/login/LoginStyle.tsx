import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 90,
        color: '#34434D',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 20,
        color: 'gray',
    },
    textinput: {
        padding: 10,
        paddingStart: 20,
        height: 50,
        width: '80%',
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    button: {
        marginTop: 30,
        height: 50,
        width: '80%',
        borderRadius: 30,
        backgroundColor: '#34434D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});