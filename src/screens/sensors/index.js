import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/header'
import styles from './styles'
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes,
    magnetometer,
    barometer,
    gravity,
    orientation
  } from "react-native-sensors";

function Sensors(){

    setUpdateIntervalForType(SensorTypes.accelerometer, 1000);
    setUpdateIntervalForType(SensorTypes.barometer, 1000);
    setUpdateIntervalForType(SensorTypes.gravity, 1000);
    setUpdateIntervalForType(SensorTypes.gyroscope, 1000);
    setUpdateIntervalForType(SensorTypes.magnetometer, 1000);
    setUpdateIntervalForType(SensorTypes.orientation, 1000);

    const [gyro, setGyro] = useState({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    })
    const [accelerator, setAccelerator] = useState({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    })
    const [bar, setBar] = useState(0)
    const [magnet, setMagnet] = useState({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    })
    const [Gforce, setGforce] = useState({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    })
    const [orient, setOrient] = useState({
        pitch: 0,
        qw: 0,
        qy: 0,
        qz: 0,
        roll: 0,
        timestamp: 0,
        yaw: 0
    })

    useEffect(() => {
        gyroscope.subscribe(({ x, y, z, timestamp }) =>
            setGyro({
                x: x,
                y: y,
                z: z,
                timestamp: timestamp
            })
        );

        accelerometer.subscribe(({ x, y, z, timestamp }) =>
            setAccelerator({
                x: x,
                y: y,
                z: z,
                timestamp: timestamp
            })
        );
      
        barometer.subscribe(({ pressure }) =>
            setBar(pressure)
        );

        magnetometer.subscribe(({ x, y, z, timestamp }) =>
            setMagnet({
                x: x,
                y: y,
                z: z,
                timestamp: timestamp
            })
        );

        gravity.subscribe(({ x, y, z, timestamp }) =>
            setGforce({
                x: x,
                y: y,
                z: z,
                timestamp: timestamp
            }) 
        )

        orientation.subscribe(({pitch, qw, qy, qz, roll, timestamp, yaw}) => {
            setOrient({
                pitch: pitch,
                qw: qw,
                qy: qy,
                qz: qz,
                roll: roll,
                timestamp: timestamp,
                yaw: yaw
            })
        })

    },[])

    return(
        <View style={styles.container}>
            <Header title={'Sensors'} icon={'microchip'}/>
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.title}>Gyroscope</Text>
                    <Text style={styles.subtitle}>x: {gyro.x}</Text>
                    <Text style={styles.subtitle}>y: {gyro.y}</Text>
                    <Text style={styles.subtitle}>z: {gyro.z}</Text>
                    <Text style={styles.subtitle}>timestamp: {gyro.timestamp}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Accelerometer</Text>
                    <Text style={styles.subtitle}>x: {accelerator.x}</Text>
                    <Text style={styles.subtitle}>y: {accelerator.y}</Text>
                    <Text style={styles.subtitle}>z: {accelerator.z}</Text>
                    <Text style={styles.subtitle}>timestamp: {accelerator.timestamp}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Barometer</Text>
                    <Text style={styles.subtitle}>Pressure: {bar}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Magnetometer</Text>
                    <Text style={styles.subtitle}>x: {magnet.x}</Text>
                    <Text style={styles.subtitle}>y: {magnet.y}</Text>
                    <Text style={styles.subtitle}>z: {magnet.z}</Text>
                    <Text style={styles.subtitle}>timestamp: {magnet.timestamp}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>G-Force</Text>
                    <Text style={styles.subtitle}>x: {Gforce.x}</Text>
                    <Text style={styles.subtitle}>y: {Gforce.y}</Text>
                    <Text style={styles.subtitle}>z: {Gforce.z}</Text>
                    <Text style={styles.subtitle}>timestamp: {Gforce.timestamp}</Text>
                </View>
                <View style={[styles.card, {marginBottom: 50}]}>
                    <Text style={styles.title}>Orientantion</Text>
                    <Text style={styles.subtitle}>pitch: {orient.pitch}</Text>
                    <Text style={styles.subtitle}>qw: {orient.qw}</Text>
                    <Text style={styles.subtitle}>qy: {orient.qy}</Text>
                    <Text style={styles.subtitle}>qz: {orient.qz}</Text>
                    <Text style={styles.subtitle}>roll: {orient.roll}</Text>
                    <Text style={styles.subtitle}>yaw: {orient.yaw}</Text>
                    <Text style={styles.subtitle}>timestamp: {orient.timestamp}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Sensors