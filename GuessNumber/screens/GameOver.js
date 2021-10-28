import React from 'react';
import {View,Text, StyleSheet,Button, Image} from 'react-native';

const GameOver = props =>{
    return(
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')}
                 style={styles.image} 
                 resizeMode={'cover'}/>
            </View>
            <Text>Number of Rounds : {props.rounds}</Text>
            <Text>Actual Number : {props.actualNumber}</Text>
            <Button title="Restar the Game!" onPress={props.restartGame}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        alignItems : 'center',
        justifyContent : 'center'
    },
    imageContainer :{
        width: 300,
        height :300,
        overflow:  'hidden'
    },
    image : {
        height : '100%',
        width : '100%',
        borderRadius : 150,
        borderWidth : 3,
        borderColor : 'black'
    }

});

export default GameOver;