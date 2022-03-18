import React, { Component, useEffect, useState } from 'react'
import { FlatList, View, NativeEventEmitter, PermissionsAndroid, Platform } from 'react-native'
import Header from '../../components/header'
import styles from './styles'
import {RNLocationSatellites} from 'react-native-location-satellites';
const GPSEventEmitter = new NativeEventEmitter(RNLocationSatellites)
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

function Satellite(){

    async function permission(){
        try {
  
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'App Location Permission',
                'message': 'Maps App needs access to your map ' +
                  'so you can be navigated.'
              }
            );
        
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the location");
              return true;
        
            } else {
              console.log("location permission denied");
              return false;
            }
        
          } catch (err) {
            console.warn(err)
          }
    }

    useEffect(() => {
        /*permission()
        setTimeout(readSatellites,5000)
        return(() => GPSEventEmitter.removeListener('RNSatellite'))*/
    },[])


    function readSatellites(){
        console.log(JSON.stringify(RNLocationSatellites),JSON.stringify(GPSEventEmitter))
        RNLocationSatellites.startLocationUpdate()
        GPSEventEmitter.addListener('RNSatellite', (event) => {
            console.log(JSON.stringify(event))
            //alert(JSON.stringify(event))
        })
    
        RNLocationSatellites.getKnownLocation().then((location)=>{
            console.log("Last Loc",location)
        })
    }

    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

export default Satellite