import React, { Component, useEffect, useState } from 'react'
import { Text, View, NativeEventEmitter, PermissionsAndroid, Platform } from 'react-native'
import Header from '../../components/header'
import styles from './styles'
import {RNLocationSatellites} from 'react-native-location-satellites';
const GPSEventEmitter = new NativeEventEmitter(RNLocationSatellites)
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

function Satellite(){

  const [satellites, setSatellites] = useState(0)
  const [bearing, setBearing] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [altitude, setAltitude] = useState(0)
  const [elapsedTime, setElapsedTime] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

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
        permission()
        setTimeout(readSatellites,5000)
        return(() => GPSEventEmitter.removeListener('RNSatellite'))
    },[])


    function readSatellites(){
        console.log(JSON.stringify(RNLocationSatellites),JSON.stringify(GPSEventEmitter))
        RNLocationSatellites.startLocationUpdate()
        GPSEventEmitter.addListener('RNSatellite', (event) => {
            console.log(JSON.stringify(event))
            //alert(JSON.stringify(event))
            setSatellites(event.satellites)
            setBearing(event.bearing)
            setAccuracy(event.accuracy),
            setLatitude(event.latitude)
            setLongitude(event.longitude)
            setAltitude(event.altitude)
            setElapsedTime(event.elapsed_time)
        })
    
        RNLocationSatellites.getKnownLocation().then((location)=>{
            console.log("Last Loc",location)
        })
    }

    return(
        <View style={styles.container}>
            <Header title='Satellite' icon='satellite'/>
            <View style={styles.card}>
            {longitude != 0 || latitude != 0 ? 
              <>
                <Text style={styles.title}>Setellites location</Text>
                <Text style={styles.subtitle}>Satellites: {satellites}</Text>
                <Text style={styles.subtitle}>Bearing: {bearing}</Text>
                <Text style={styles.subtitle}>Speed: {speed}</Text>
                <Text style={styles.subtitle}>Accuracy: {accuracy}</Text>
                <Text style={styles.subtitle}>ElapsedTime: {elapsedTime}</Text>
                <Text style={styles.subtitle}>Altitude: {altitude}</Text>
                <Text style={styles.subtitle}>Latitude: {latitude}</Text>
                <Text style={styles.subtitle}>Longitude: {longitude}</Text>
              </>
              :
              <Text style={styles.textWait}>Waiting ...</Text>
            }
           </View>
        </View>
    )
}

export default Satellite