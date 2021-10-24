import React,{useState} from 'react';
import {View,TextInput, StyleSheet,Button,Modal} from 'react-native';

const GoalInput = props =>{

    const [enteredGoal,setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) =>{
        setEnteredGoal(enteredGoal);
    }
    return(
            <View style={styles.inputContainer}>
                            <TextInput placeholder="Enter your Goal"
                            style={styles.input}
                            onChangeText={goalInputHandler}
                            Value={enteredGoal}/>
                            <Button title="Add Goal!" onPress={props.press.bind(this,enteredGoal)}/>
            </View>
        );
}

export default GoalInput;

const styles = StyleSheet.create({
inputContainer : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems:'center'
    },
    input : {
    borderColor:'black',
    borderWidth:1,
     margin :40,
     width:'60%'
    }
})