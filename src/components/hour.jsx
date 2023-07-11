/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';


function Hour(props) {
    const [hour, setHour] = useState(0);
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState(0);


    useEffect(() => {
        fetch(`{machine_ip}:8080/hourly?index=${props.index}`)
            .then((res) => res.json())
            .then((json) => {
                setHour(json.hour);
                setIcon(json.icon);
                setTemp(json.temp);
            });
    });


    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>{hour}</Text>
            <Image style={styles.icon} source={{uri: 'https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png'}} />
            <Text style={styles.baseText}>{temp}</Text>
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
