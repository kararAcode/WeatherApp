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

function Day() {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>5/26</Text>
            <Image style={styles.icon} source={{uri: 'https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png'}} />
            <Text style={styles.baseText}>18/11</Text>
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
