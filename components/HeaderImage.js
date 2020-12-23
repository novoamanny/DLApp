import React from 'react';

import {View, Image, StyleSheet, Platform} from 'react-native'

const HeaderImage = () =>{
    return(
        <View>
            <Image style={styles.logo} source={require('../images/devlink-logo/devlink-text-white-logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80,
        alignSelf: Platform.OS === 'android' ? 'center' : null
    }
})


export default HeaderImage;