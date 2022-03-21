import React, { Component, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/header'
import styles from './styles'
import DeviceInfo from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";
import {useNetInfo} from "@react-native-community/netinfo";

function WiFi(){

    const [info, setInfo] = useState({})

    useEffect(() => {
        setInfo(useNetInfo())
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
        })
    },[])


    useEffect(() => {
        console.log("Info", info);
    },[info])

    return(
        <View style={styles.container}>
            <Header title={'WiFi'} icon={'mobile-alt'}/>
            <View style={styles.card}>
                <Text style={styles.title}>Wifi - NetInfo</Text>
                {Object.keys(info).length > 0 && 
                <>
                    <Text style={styles.subtitle}>bssid: {info.details.bssid}</Text>
                    <Text style={styles.subtitle}>ssid: {info.details.ssid}</Text>
                    <Text style={styles.subtitle}>Strength: {info.details.strength}</Text>
                    <Text style={styles.subtitle}>Frequency: {info.details.frequency}</Text>
                    <Text style={styles.subtitle}>Subnet: {info.details.subnet}</Text>
                    <Text style={styles.subtitle}>Carrier: {info.details.carrier}</Text>
                    <Text style={styles.subtitle}>is connected: {info.isConnected}</Text>
                    <Text style={styles.subtitle}>In internet reachable: {info.isInternetReachable}</Text>
                    <Text style={styles.subtitle}>In wifi enable: {info.isWifiEnabled}</Text>
                    <Text style={styles.subtitle}>inAddress: {info.details.ipAddress}</Text>
                    <Text style={styles.subtitle}>type: {info.type}</Text>
                    <Text style={styles.subtitle}>Cellular Generation: {info.details.cellularGeneration}</Text>
                    <Text style={styles.subtitle}>in Connection Expensive: {info.details.isConnectionExpensive}</Text>
                </>
                }
           </View>
        </View>
    )
}

export default WiFi