import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = props =>{
    return (
        <TextInput {...props} style={{...styles.input,...props.input}} />
    )
}

export default Input;

const styles = StyleSheet.create({
    input :{
        height : 50,
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        marginVertical : 10
    }
})