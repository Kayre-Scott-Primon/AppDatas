import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'

function Header(props){

    return(
        <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={'#fff'}/>
            <View style={styles.containerTitle}>
                <FontAwesome5 name={props.icon} color={'#009CCD'} size={25}/>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}

export default Header