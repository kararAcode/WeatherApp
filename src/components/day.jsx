/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

function Day(props) {
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [icon, setIcon] = useState(0);
    const [date, setDate] = useState(0);


    useEffect(() => {
        fetch(`{machine_ip}:8080/daily?index=${props.index}`)
        .then((res) => res.json())
        .then((json) => {
            setHigh(json.high);
            setLow(json.low);
            setIcon(json.icom);
            setDate(json.date);
        });
    });

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>{date}</Text>
            <Image style={styles.icon} source={{uri: 'https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png'}} />
            <Text style={styles.baseText}>{high}/{low}</Text>
        </View>
    );
}


const styles = {
    icon: {
        width: 25,
        height: 25,
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
