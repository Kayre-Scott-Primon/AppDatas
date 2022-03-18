import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/header';
import styles from './styles'
import CarrierInfo from 'react-native-carrier-info'

function Network(){

    
    const [VoIP, setVoIP] = useState('')
    const [name ,setName] = useState('')
    const [ISO, setISO] = useState('')
    const [MCC, setMCC] = useState(0)
    const [MNC, setMNC] = useState(0)
    const [MCC_MNC, setMCC_MNC] = useState(0)

    useEffect(() => {   
        CarrierInfo.allowsVOIP()
        .then((result) => {
          console.log('Allows VoIP', JSON.stringify(result));
          setVoIP(result ? 'true' : 'false')
        });
        CarrierInfo.carrierName()
        .then((result) => {
            console.log('Carrier Name', result);
            setName(result)
        });

        CarrierInfo.isoCountryCode()
        .then((result) => {
            console.log('ISO', result);
            setISO(result)
        });

        CarrierInfo.mobileCountryCode()
        .then((result) => {
            console.log('MCC', result);
            setMCC(result)
        });

        CarrierInfo.mobileNetworkCode()
        .then((result) => {
            console.log('MNC', result);
            setMNC(result)
        });

        CarrierInfo.mobileNetworkOperator()
        .then((result) => {
            console.log('MCC + MNC', result);
            setMCC_MNC(result)
        });

    },[])

    return(
        <View style={styles.container}>
            <Header title={'Network'} icon={'signal'}/>
            <View style={styles.card}>
                <Text style={styles.title}>Carrier</Text>
                <Text style={styles.subtitle}>Allows VoIP: {VoIP}</Text>
                <Text style={styles.subtitle}>Carrier Name: {name}</Text>
                <Text style={styles.subtitle}>ISO: {ISO}</Text>
                <Text style={styles.subtitle}>MCC: {MCC}</Text>
                <Text style={styles.subtitle}>MNC: {MNC}</Text>
                <Text style={styles.subtitle}>MCC + MNC: {MCC_MNC}</Text>
            </View>
        </View>
    )
}

export default Network