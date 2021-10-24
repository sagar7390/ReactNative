import React,{useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
export default function App(){

    const [courseGoals,setCourseGoals] = useState([]);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const addGoalHandler = goalTitle =>{
        setCourseGoals(courseGoals => [...courseGoals,{key : Math.random().toString(), value:goalTitle}]);
    }

    const removeGoalHandler = goalId =>{
        setCourseGoals(CourseGoal => {return CourseGoal.filter((goal) => goal.key!=goalId);})

    }
    return (
        <View style={styles.screen}>

                <GoalInput test={isModalOpen} press={addGoalHandler}/>
                <FlatList
                data={courseGoals}
                renderItem={itemData =>(
                    <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
                )} />
    </View>
    );
}

const styles =  StyleSheet.create({
    screen :{
    padding : 30
    }


})