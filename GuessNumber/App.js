import React,{useState} from 'react';
import {View,StyleSheet,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/Header';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App(){

    const [userNumber,setUserNumber] = useState();
    const [guessRounds,setGuessRounds] = useState(0);

    const startGameHandler = (enteredNumber) =>{
        setUserNumber(enteredNumber);
        setGuessRounds(0);
    }

    const restartGame = () =>{
        setGuessRounds(0);
        setUserNumber(null);
    }

    const gameOverHandler = (numberofRounds) => {
        setGuessRounds(numberofRounds);
    }

    let content = <GameStartScreen onGameLoad={startGameHandler}/>;
    
    if(userNumber && guessRounds==0){
        content = <GameScreen userChoice={userNumber} checkForGameOver={gameOverHandler}/>;
    }
    else if(guessRounds>0){
        content = <GameOver rounds={guessRounds} actualNumber={userNumber} restartGame={restartGame}/>
    }
    return (
     <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.screen}>
            <Header title="Guess the Number App" />
            {content}
        </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen :{
    }
})