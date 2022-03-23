import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardMenu from '../../components/cardMenu';
import Header from '../../components/header'
import { menuList } from './data';
import styles from './styles'
import { BleManager } from 'react-native-ble-plx';

function Bluetooth(){

    return(
        <View style={styles.container}>
            <Header title='Bluetooth' icon='bluetooth'/>
            <View style={styles.card}>
            {true ? 
            <>
                <Text style={styles.title}>Bluetooth</Text>
                <Text style={styles.subtitle}>Satellites: </Text>
            </>
            :
            <Text style={styles.textWait}>Waiting ...</Text>
            }
           </View>
        </View>
    )
}

export default Bluetooth