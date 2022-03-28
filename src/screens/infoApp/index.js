import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardMenu from '../../components/cardMenu';
import Header from '../../components/header'
import { menuList } from './data';
import styles from './styles'

function InfoApp(){

    return(
        <View style={styles.container}>
        <Header title='Info' icon='info'/>
            <View style={styles.card}>
                <Text style={styles.title}>Info about this app</Text>
                <Text style={styles.subtitle}>Created by: Kayré Scott Primon</Text>
                <Text style={styles.subtitle}>Created at: 18/03/2022</Text>
                <Text style={styles.subtitle}>Lasted update: 25/03/2022</Text>
                <Text style={styles.subtitle}>Objective: App for read and show all possible data information to smartphone</Text>
                <Text style={styles.subtitle}>Version: 1.0</Text>
            </View>
        </View>
    )
}

export default InfoApp