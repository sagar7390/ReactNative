import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';

export default function App(){
    return (
    <View style={styles.screen}>
        <Header title="Guess the Number App" />
        <GameStartScreen />
    </View>
    );
}

const styles = StyleSheet.create({
    screen :{
    }
})