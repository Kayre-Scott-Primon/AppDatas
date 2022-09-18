import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, View, Image } from 'react-native'
import Header from '../../components/header'
import styles from './styles'
import {
    setUpdateIntervalForType,
    SensorTypes,
    magnetometer
  } from "react-native-sensors";

function Compass(){

    setUpdateIntervalForType(SensorTypes.magnetometer, 1000);

    const [magnet, setMagnet] = useState({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    })

    const [angle, setAngle] = useState(0)
    const [rotationAnimated, setRotationAnimated] = useState(new Animated.Value(0))
    const [deg, setDeg] = useState(0)

    useEffect(() => {
        magnetometer.subscribe(({ x, y, z, timestamp }) =>
            setMagnet({
                x: x,
                y: y,
                z: z,
                timestamp: timestamp
            })
        );
    },[])

    useEffect(() => {
        startAnimation()
    },[])

    useEffect(() => {
        var aux = 0
        if(Math.atan2(magnet.y, magnet.x) >= 0) {
            aux = Math.atan2(magnet.y, magnet.x) * (180 / Math.PI);
        } else {
            aux = (Math.atan2(magnet.y, magnet.x) + 2 * Math.PI) * (180 / Math.PI);
        }
        console.log('magnet', JSON.stringify(magnet))
        setAngle(aux)
        startAnimation()

    },[magnet])

    function startAnimation() {
      Animated.timing(rotationAnimated, {
        toValue: angle, //<-- What put here?
        duration: 500,
        useNativeDriver: true
      }).start();
    }

    useEffect(() => {
        rotationAnimated.addListener((value) => {setDeg(value.value)})
    },[rotationAnimated])

    return(
        <View style={styles.container}>
        <Header title={'Compass'} icon={'compass'}/>
            <View style={styles.containerIcon}>
                <Animated.Image 
                    source={require('./compass.png')} 
                    style={{
                        height: 350,
                        width: 350,
                        tintColor: '#fff',
                        transform: [{rotate: `${deg-90}deg`}]
                }}/>
                <Text style={styles.subtitle}>Degree: {deg-90}</Text>
            </View>
        </View>
    )
}

export default Compass