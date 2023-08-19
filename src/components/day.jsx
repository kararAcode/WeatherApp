/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

function Day(props) {
  
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>{props.date}</Text>
            <Image style={styles.icon} source={{uri: `https://openweathermap.org/img/wn/${props.icon}.png`}} />
            <Text style={styles.baseText}>{props.high}/{props.low}</Text>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 5,
    },

    baseText: {
        color: 'white',
    },
};

export default Day;