import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {register, login} from '../store/actions/auth';



const LandingForm = ({register, login}) =>{

    const [formLayout, setFormLayout] = useState('register');
    const [form, setForm] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        tempPass: ''
    })

    const onTextChange = (label, e) =>{
        setForm({...form, [label]: e})
    }

    const onSubmit = async () =>{
        
        if(formLayout === 'register'){
            
            if(form.Password !== form.tempPass){
                console.log('Passwords dont match', form)
            }
            else{
                register(form.FirstName, form.LastName, form.Email, form.Password);
            }
        }
        else{
            login(form.Email, form.Password);
        }
    }

    // if()

    return(
        <View style={styles.view}>
           
            <View style={styles.viewTwo}>
                <View>
                    <Image style={styles.logo} source={require('../images/devlink-logo/devlink-text-white-logo.png')}/>
                </View>

                <View>
                    {   formLayout === 'register' && 
                        (
                            <View>
                                <TextInput onChangeText={e => onTextChange('FirstName',e)} name='FirstName'  style={styles.NameInput} placeholder='Enter First Name'/>
                                <TextInput onChangeText={e => onTextChange('LastName', e)} name='LastName'  style={styles.NameInput} placeholder='Enter Last Name'/>
                            </View>
                        )
                    }

                    <TextInput onChangeText={e => onTextChange('Email',e)} name='Email'  style={styles.NameInput} placeholder='Enter Email Address'/> 
                    <TextInput onChangeText={e => onTextChange('Password',e)} name='Password'  style={styles.NameInput} placeholder='Enter Password'/> 

                    {   formLayout === 'register' && 
                        (
                            <View>
                                <TextInput  onChangeText={e => onTextChange('tempPass',e)} name='tempPass'  style={styles.NameInput} placeholder='Confirm Password'/> 
                            </View>
                        )
                    }
                </View>
                
                <View style={styles.submitView}>
                    <TouchableOpacity style={styles.submitBTN} onPress={() => onSubmit()}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.landingButtons}>
                    <View style={formLayout === 'register' ? styles.activeBTN : styles.nonActiveBTN} onTouchEnd={() => setFormLayout('register')}>
                        <Text style={formLayout === 'register' ? styles.activeText : styles.nonActiveText}>Register</Text>
                    </View>
                    <View style={formLayout === 'login' ? styles.activeBTN : styles.nonActiveBTN} onTouchEnd={() => setFormLayout('login')}>
                        <Text style={formLayout === 'login' ? styles.activeText : styles.nonActiveText}>Sign In</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

LandingForm.propTypes = {
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
    logo:{
        alignSelf: 'center',
        width: 120,
        height: 80
    },
    viewTwo:{
        backgroundColor: 'rgba(0,0,0, 0.5)',
        alignSelf: 'center',
        // paddingBottom: 50,
        width: '90%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    NameInput:{
        height: 40,
        // width: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 6,
        paddingLeft: 5,
        marginVertical: 10
        
    },
    landingButtons:{
        flexDirection: 'row',
        marginTop: 20
    },
    activeText:{
        textAlign: 'center',
        fontWeight: '600',
        color: '#2f2f2f'
    },
    nonActiveText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600'
    },
    activeBTN:{
        width: '50%',
        paddingVertical: 20,
        backgroundColor: 'rgba(255,255,255,1)',
        
        
    },
    nonActiveBTN:{
        width: '50%',
        paddingVertical: 20,
        

    },
    submitView:{
        marginTop: 10
    },
    submitBTN:{
        backgroundColor: '#fff',
        width: '40%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 5
    },
    submitText:{
        color: '#2f2f2f',
        textAlign: 'center'
    },
    displayNone:{
        display: 'none'
    }
})

export default connect(null, {register, login})(LandingForm);