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
import Day from './day';

function DayList() {
    return (
        <View style={styles.container}>
            {[...Array(7)].map((x, i) =>
              <Day key={i}/>
            )}
        </View>
    );
}

const styles = {
    container: {

      width: Dimensions.get('screen').width * 0.9,

      marginTop: 40,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,

    },


  };
export default DayList;
