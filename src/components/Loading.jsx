import React from "react";
import  {LinearGradient}  from "expo-linear-gradient";
import { Image, ProgressBar, View}  from "react-native";


function Loading() {
    return (
        <LinearGradient colors={['#000b18', '#0052a2']} style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/02d@2x.png`}} />
                <ProgressBar style={styles.progressbar} indeterminate trackColor="#68aee7"/>
            </View>
            

        </LinearGradient>
    );
}


const styles = {
    icon: {
        width: 250,
        height: 250,
    },

    background: {
        alignItems: 'center',
        justifiyContent: 'center',
        width: "100%",
    },

    container: {
        marginTop: '12rem',

        
    },
    
    
    progressbar: {
        width: '100%'
    },

    baseText: {
        color: 'white',
    },
};

export default Loading;