import React,{useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App(){
    const [outputText,setOutputText] = useState('');

    function toggleStates(){
        if(outputText=='My first rn-app'){
        setOutputText('Button clicked')
        }
        else{
        setOutputText('My first rn-app')
        }
    }
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button title="rn-button" onPress={toggleStates}/>
        </View>
    );
}

const styles =  StyleSheet.create({
    container :{
    flex : 1,
    backgroundColor  :'#fff',
    alignItems : 'center',
    justifyContent : 'center',
    }
})