/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  View,
} from 'react-native';
import Day from './Day';

function DayList(props) {
    return (
        <View style={styles.container}>
            {props.data.map((day, i) => {
              return <Day key={i} index={i} date={day.date} icon={day.icon} high={day.high} low={day.low}/>

            }
            )}
        </View>
    );
}

const styles = {
    container: {

      width: Dimensions.get('screen').width * 0.9,
      margin: 'auto',
      maxWidth: 400,
      marginTop: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,

      

    },
    


  };
export default DayList;