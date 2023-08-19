import React from "react";
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import {ProgressBar} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';



function Loading(props) {
    return (
        <LinearGradient colors={['#000b18', '#0052a2']} style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/02d@2x.png`}} />
                <ProgressBar style={styles.progressbar} indeterminate color="#68aee7"/>
            </View>
            

        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    icon: {
        width: 250,
        height: 250,
    },

    background: {
        alignItems: 'center',
        justifiyContent: 'center',
        flex:1,
        width: '100%'
    },

    container: {
        marginTop: Dimensions.get('window').height* 0.25,
        
    },
    
    
    progressbar: {
        width: '100%'
    },

    baseText: {
        color: 'white',
    },
});

export default Loading;