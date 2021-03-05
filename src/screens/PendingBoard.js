import React, {useContext} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import TaskCard from '../components/TaskCard';
import {store} from '../js/store.js';
import uuid from 'react-uuid';

const styles = StyleSheet.create({
  container: {
    padding: '12px'
  },
  addButton: {
    color: 'red',
    fontSize: '24px',
  },
})

const PendingBoard = (props) => {
  
  const globalState = useContext(store);
  const {dispatch} = globalState;

  const createTask = () => {
    const newTask = {title: 'New task', priority: 0, dueDate: new Date(), complete: false, removed: false, isExpanded: false};
    dispatch({type: 'tasks', payload: [...globalState.state.tasks, newTask]}); 
  }

  return(
    <View style={styles.container}>
      {props.tasks.map((task, id) => {
        if(!task.complete){
          return(
            <TaskCard key={uuid()} index={id} title={task.title} priority={task.priority} dueDate={Date.parse(task.dueDate)} complete={task.complete} removed={task.removed} isExpanded={task.isExpanded} />
          )
        }
      })}
      <Button onPress={() => {createTask()}}>
        <CustomIcon name={'pluscircle'} size={25} color='red' />
      </Button>
    </View>
  )
}

export default PendingBoard;
