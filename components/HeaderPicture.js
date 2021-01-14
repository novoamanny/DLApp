import React from 'react';

import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';


const HeaderPicture = () =>{
    return(
        <TouchableHighlight style={styles.view} onPress={() => console.log('hello')}>
            <Image style={styles.image} source={require('../images/profile-pic.png')}/>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    view:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        padding: 5,
        marginLeft: 15
    },
    image:{
        height: 25,
        width: 25,
        
    }
})

export default HeaderPicture;