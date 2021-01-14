import React from 'react';

import {View, Image, StyleSheet, TouchableHighlight, Platform, TouchableOpacity} from 'react-native';



const HeaderPictureTwo = () =>{
    return(
        <TouchableOpacity style={styles.view} onPress={() => console.log('hello')}>
            <Image style={styles.image} source={require('../images/feather.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view:{
        // borderWidth: 1,
        // borderColor: '#fff',
        // borderRadius: 50,
        padding: Platform.OS === 'android' ? 12 : 6,
        marginRight: 15,
        
    },
    image:{
        height: 25,
        width: 25,
        
    }
})

export default HeaderPictureTwo;