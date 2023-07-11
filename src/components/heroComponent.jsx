/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




function HeroSection() {
  const [title, setTitle] = useState(0);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);

  useEffect(() => {
    fetch('{machine_ip}:8080/current')
      .then((res) => res.json())
      .then((json) => {
        setTitle(json.city);
        setTemp(json.temp);
        setCondition(json.condition);
        setHigh(json.high);
        setLow(json.low);
      });
  });


  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.title]}>{title}</Text>
      <Text style={[styles.baseText, styles.degrees]}>{temp}</Text>
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
