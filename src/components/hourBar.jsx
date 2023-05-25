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
import Hour from './hour';

function HourBar() {
    return (
        <ScrollView horizontal={true} style={styles.container}>

          {[...Array(24)].map((x, i) =>
              <Hour key={i} styles={styles.item}/>
            )}

        </ScrollView>
    );
}


const styles = {
  container: {

    width: Dimensions.get('screen').width * 0.9,

    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,


  },


};
export default HourBar;
