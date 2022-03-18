import React from 'react'
import { Text, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

function CardMenu(props){

    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate(props.data.navigateTo)}}>
            <>
                <FontAwesome5 name={props.data.icon} size={40} color={'#000'}/>
                <Text style={styles.title}>{props.data.title}</Text>
            </>
        </TouchableOpacity>
    )
}

export default CardMenu