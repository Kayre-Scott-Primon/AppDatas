import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View, NativeModules, NativeAppEventEmitter } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardMenu from '../../components/cardMenu';
import Header from '../../components/header'
import { menuList } from './data';
import styles from './styles'
import BleManager from 'react-native-ble-manager';


function Bluetooth(){

    const [state, setState] = useState(false)

    useEffect(() => {
        console.log('bluetooth scanner mounted');

        NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral',(data) => 
        {
            let device = 'device found: ' + data.name + '(' + data.id + ')'; 

            if(this.devices.indexOf(device) == -1) {
                devices.push(device);
            }

            let newState = this.state;
            newState.dataSource = newState.dataSource.cloneWithRows(this.devices);
            setState(newState);
        });

        BleManager.start({showAlert: false})
            .then(() => {
                // Success code 
                console.log('Module initialized');
        });
    })

    function startScanning() {
        console.log('start scanning');
        BleManager.scan([], 120);
    }
    startScanning()

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