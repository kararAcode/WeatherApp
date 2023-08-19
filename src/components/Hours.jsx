/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  ScrollView,
} from 'react-native';
import Hour from './Hour';

function HourBar(props) {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
          
          {props.data.map((hour, i) =>{
              return <Hour key={i} styles={styles.item} time={hour.time} icon={hour.icon} temp={hour.temp}/>

          })}

        </ScrollView>
    );
}


const styles = {
  container: {

    width: Dimensions.get('screen').width * 0.9,
    maxWidth: 400,
    margin: 'auto',
       // minWidth: Dimensions.get('screen').width * 0.9,
    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    // alignItems: 'center'



  },

  


};
export default HourBar;