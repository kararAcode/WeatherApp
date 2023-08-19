import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeroSection from './HeroSection';
import { LinearGradient } from 'expo-linear-gradient';
import HourBar from './Hours';
import DayList from './Days';

function Weather(props) {

    return (
        
        <LinearGradient colors={['#000b18', '#0052a2']} style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.weather}>
            <HeroSection data={props.data.current}/>
            <HourBar data={props.data.hourly} />
            <DayList data={props.data.daily}/>
          </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center'
    },

    weather: {
      marginTop: 50
    }
  });
  

export default Weather;