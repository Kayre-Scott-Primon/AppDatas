import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#009CCD',
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10,
        width: '90%',
        marginBottom: 100
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: '900',
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 18,
        color: '#000'
    }
})