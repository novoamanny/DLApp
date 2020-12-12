import React from 'react';

import {View, Image, StyleSheet} from 'react-native'

const HeaderImage = () =>{
    return(
        <View>
            <Image style={styles.logo} source={require('../images/devlink-logo/devlink-black-logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80
    }
})


export default HeaderImage;