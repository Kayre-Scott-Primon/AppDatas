import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardMenu from '../../components/cardMenu';
import Header from '../../components/header'
import { menuList } from './data';
import styles from './styles'

function Main(){

    useEffect(() => {
        console.log('main', menuList)
    },[menuList])

    return(
        <View style={styles.container}>
            <Header title={'AppDatas'} icon={'dice-d20'}/>
            <FlatList
                data={menuList}
                numColumns={2}
                style={styles.list}
                keyExtractor={(data) => data.id}
                renderItem={({item: data}) => (
                    <CardMenu data={data}/>
                )}
            />
        </View>
    )
}

export default Main