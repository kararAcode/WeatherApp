/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function Hour() {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>11:00</Text>
            <Image style={styles.icon} source={{uri: 'https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png'}} />
            <Text style={styles.baseText}>18</Text>
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
