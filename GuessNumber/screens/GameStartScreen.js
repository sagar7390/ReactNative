import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Cards';
import Input from '../components/Input';
import Number from '../components/NumberContainer';
const StartGameScreen  = props =>{

    const [enteredInput,setEnteredInput] = useState('');
    const [selectedNumber,setSelectedNumber] = useState();
    const [confirmed,setConfirmed] = useState(false);
    const validateEnteredInput = inputNumber =>{
        setEnteredInput(inputNumber.replace(/[^0-9]/g,''));
    }
    const resetButtonHandler = () =>{
        setEnteredInput('');
        setConfirmed(false);
    }
    
    const confirmButtonHandler = () =>{
         const chosenNumber = parseInt(enteredInput);
         if(chosenNumber==NaN || chosenNumber<1 || chosenNumber>99){
            Alert.alert('Please enter number between 1 and 99');
         }
        setEnteredInput('');
        setSelectedNumber(chosenNumber);
        setConfirmed(true);
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput =   <Card style={styles.summaryContainer} inputContainer={styles.summaryContainer}>
                                <Text>The selected Number is :  </Text>
                                <Number>{selectedNumber}</Number>        
                                <Button title="START GAME" onPress={() =>{props.onGameLoad(selectedNumber)}}/>
                            </Card>;
    }


    return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start the Game!</Text>
        <Card inputContainer={styles.inputContainer} >
            <Text>Select a Number!</Text>
            <Input style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={validateEnteredInput}
            value={enteredInput}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" onPress={resetButtonHandler} color="#c717fc" /></View>
                <View style={styles.button}><Button title="Confirm" onPress={confirmButtonHandler} color="#f7287b" /></View>
            </View>
        </Card>
        {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
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
    },
    button  :{
        width : 100
    },
    input : {
        width : 50,
        textAlign  : 'center'
    },
    summaryContainer:{
        marginTop: 20
    }



})