/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




function HeroSection(props) {
 


  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.title]}>{props.data.city}</Text>
      <Text style={[styles.baseText, styles.degrees]}>{props.data.temp}</Text>
      <Text style={[styles.baseText, styles.highLow]}>{props.data.high}/{props.data.low}</Text>
      <Text style={[styles.baseText, styles.highLow]}>{props.data.condition}</Text>
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