import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskCard from '../components/TaskCard';

const styles = StyleSheet.create({
  container: {
    padding: '12px'
  }
})

const CompleteBoard = (props) => {

  return(
    <View style={styles.container}>
      {props.tasks.map((task, id) => {
        if(task.complete){
          return(
            <TaskCard key={id} index={id} title={task.title} priority={task.priority} dueDate={Date.parse(task.dueDate)} complete={task.complete} />
          )
        }
      })}
    </View>
  )
}

export default CompleteBoard;
