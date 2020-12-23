import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';


// import HeaderImage from '../../components/HeaderImage';


const LandingScreen = () =>{

   

    return(
        <View style={styles.Layout}>
           <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        flex: 1,
        backgroundColor: '#2f2f2f',
        
    },
    
    
})


export default LandingScreen;