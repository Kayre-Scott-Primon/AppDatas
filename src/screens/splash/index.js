import React, { Component, useEffect } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'

function Splash({navigation}){

    useEffect(() => {
        setTimeout(() => {navigation.navigate('Main')}, 2500)
    },[])

    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#009CCD'}/>
            <FontAwesome5 name='dice-d20' color={'#fff'} size={250}/>
            <Text style={styles.title}>AppDatas</Text>
        </View>
    )
}

export default Splash