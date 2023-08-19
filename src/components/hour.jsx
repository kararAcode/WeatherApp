/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';


function Hour(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>{props.time}</Text>
            <Image style={styles.icon} source={{uri: `https://openweathermap.org/img/wn/${props.icon}.png`}} />
            <Text style={styles.baseText}>{props.temp}</Text>
        </View>
    );
}


const styles = {
    icon: {
        width: 35,
        height: 35,
    },

    container: {
        alignItems: 'center',
        margin: 15,
        gap: 10,
    },

    baseText: {
        color: 'white',
    },
};
export default Hour;