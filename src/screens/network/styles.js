import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#009CCD',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10,
        width: '90%'
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