import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet, Button, Alert, ScrollView} from 'react-native';
import Number from '../components/NumberContainer';
import Card from '../components/Cards';
import GameOver from '../screens/GameOver';

const randomNumberGenerator = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomGuess = Math.floor(Math.random()*(max-min)) + min;
    if(randomGuess==exclude){
        return randomNumberGenerator(min,max,exclude);
    }
    else{
        return randomGuess;
    }
}



const GameScreen = props =>{
    const initialGuess = randomNumberGenerator(1,100,props.userChoice);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessCount,setGuessCount] = useState(0);
    const [guessesSoFar,setGuessesSoFar] = useState([initialGuess]);

    const currentLower = useRef(1);
    const currentHigher = useRef(100);

    useEffect(() =>{
        if(currentGuess==props.userChoice){
            props.checkForGameOver(guessCount);
        }
    });

    const nextGuessHandler = (direction) =>{
        if((direction==='lower' && currentGuess<props.userChoice) || 
            (direction==='greater' && currentGuess>props.userChoice)){
                Alert.alert('Please enter right hint!');
                return;
            }

        if(direction==='lower'){
            currentHigher.current = currentGuess;      
        }
        else{
            currentLower.current = currentGuess+1;
        }
        const nextGuess = randomNumberGenerator(currentLower.current,currentHigher.current,currentGuess);
        setCurrentGuess(nextGuess);
        setGuessCount(guessCount+1);
        setGuessesSoFar(currentGuesses =>[nextGuess,...currentGuesses]);
    }

    return (
        <View style={styles.screen}>
            <Text>Computer Guess</Text>
            <Number>{currentGuess}</Number>
            <Card inputContainer={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
            <ScrollView>
                <Text>
                    {guessesSoFar.map(guess=>
                        <View key={guess}>
                            <Text>{guess}</Text>
                        </View>)}
                </Text>
            </ScrollView>
        </View>
    );
    
    
}

const styles = StyleSheet.create({
    screen:{
        padding: 10,
        alignItems : 'center'
    },
    buttonContainer: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 20,
        width : 300,
        maxWidth : '80%',
        
    }

})

export default GameScreen;