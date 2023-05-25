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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function HeroSection() {
    return (
      // @ts-ignore
        <View style={styles.container}>
          <Text style={[styles.baseText, styles.title]}>Stonebridge</Text>
          <Text style={[styles.baseText, styles.degrees]}>25</Text>
          <Text style={[styles.baseText, styles.highLow]}>25/11</Text>
          <Text style={[styles.baseText, styles.highLow]}>Mostly Cloudy</Text>


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
