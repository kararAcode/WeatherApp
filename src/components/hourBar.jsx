/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  ScrollView,
} from 'react-native';
import Hour from './hour';

function HourBar() {
    return (
        <ScrollView horizontal={true} style={styles.container}>

          {[...Array(12)].map((x, i) =>
              <Hour key={i} styles={styles.item} index={i}/>
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
