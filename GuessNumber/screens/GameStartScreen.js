import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
import Card from '../components/Cards'
const StartGameScreen  = props =>{
    return (
    <View style={styles.screen}>
        <Text style={styles.title}>Start the Game!</Text>
        <Card inputContainer={styles.inputContainer}>
            <Text>Select a Number!</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <Button title="Reset" onPress={()=>{}}/>
                <Button title="Confirm" onPress={()=>{}}/>
            </View>
        </Card>
    </View>
     );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen :{
        padding : 10,
        alignItems : 'center'
    },
    title:{
        fontSize : 20,
        marginVertical : 10
        },
    inputContainer:{
        width : 300,
        maxWidth : '80%',
        alignItems : 'center',

      },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
    }


})