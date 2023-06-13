/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';


let lat;
let lon;
let apiKey = '8bbe8a62ea8940bf8bc165607232505';

// const requestAccess = async () => {
//   try {
//     const permission = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Geolocation Permission',
//         message: 'Can we access your location?',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },

//     );

//     return permission === 'granted';
//   }

//   catch (err) {
//     return false;
//   }
// };

// console.log(requestAccess());

let currentTemp, title, condition;
let high, low;

const getCurrentWeatherData = async () => {
  await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=52.16,-106.6&aqi=no`)
        .then((res) => res.json())
        .then((json) => {
            title = json.location.name;
            currentTemp = json.current.temp_c;
            condition = json.current.condition.text;
        });
};

const getHighLow = async () => {
  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=52.16,-106.6&aqi=no`)
        .then((res) => res.json())
        .then((json) => {
            high = Math.round(json.forecast.forecastday[0].day.maxtemp_c);
            low = Math.round(json.forecast.forecastday[0].day.mintemp_c);
        });

};


getCurrentWeatherData();
getHighLow();

console.log(title);

function HeroSection() {

    return (
        <View style={styles.container}>
          <Text style={[styles.baseText, styles.title]}>{title}</Text>
          <Text style={[styles.baseText, styles.degrees]}>{currentTemp}</Text>
          <Text style={[styles.baseText, styles.highLow]}>{high}/{low}</Text>
          <Text style={[styles.baseText, styles.highLow]}>{condition}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    baseText: {
        color: 'white',
    },

    title: {
        fontSize:25,
    },

    degrees: {
        fontSize: 80,
    },

    container: {
        alignItems: 'center',
        marginTop: 40,
    },

    highLow: {
        fontSize: 15,
    },




  });



export default HeroSection;
