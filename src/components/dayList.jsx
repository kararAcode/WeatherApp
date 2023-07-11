/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import Day from './day';

function DayList() {
    return (
        <View style={styles.container}>
            {[...Array(4)].map((x, i) =>
              <Day key={i} index={i}/>
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
