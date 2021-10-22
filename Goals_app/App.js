import React,{useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

export default function App(){
    const [enteredGoal,setEnteredGoal] = useState('');
    const [courseGoals,setCourseGoals] = useState([]);
    const goalInputHandler = (enteredGoal) =>{
        setEnteredGoal(enteredGoal);
    }
    const addGoalHandler = ()=>{
        setCourseGoals(courseGoals => [...courseGoals,enteredGoal]);
    }
    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter your Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                Value={enteredGoal}/>
                <Button title="Add Goal!" onPress={addGoalHandler}/>
            </View>
            <View>
                <ScrollView>
                    {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
                </ScrollView>
            </View>

    </View>
    );
}

const styles =  StyleSheet.create({
    screen :{
    padding : 30
    },
    inputContainer : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems:'center'
    },
    input : {
    borderColor:'black',
    borderWidth:1,
     margin :10,
     width:'60%'
    },
    listItem :{
    padding : 10,
    backgroundColor : '#ccc',
    borderColor :'black',
    borderWidth:1
    }


})