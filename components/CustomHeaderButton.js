import React from 'react';

import {View} from 'react-native';

import {HeaderButton} from 'react-navigation-header-buttons';


const CustomHeaderButton = (props) =>{
    return(
        <HeaderButton {...props} iconSize={20}/>
    )
}



export default CustomHeaderButton;