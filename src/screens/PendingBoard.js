import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import TaskCard from "../components/TaskCard";
import CustomIcon from "../components/CustomIcon";
import { store } from "../js/store.js";
import uuid from "react-native-uuid";

const styles = StyleSheet.create({
  container: {
    padding: "12px",
  },
  addButton: {
    flexDirection: "row-reverse",
  },
});

const PendingBoard = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const createTask = () => {
    const newTask = {
      title: "New task",
      priority: 0,
      dueDate: new Date(),
      complete: false,
      removed: false,
      isExpanded: false,
    };
    dispatch({ type: "tasks", payload: [...globalState.state.tasks, newTask] });
  };

  return (
    <View style={styles.container}>
      {props.tasks.map((task, id) => {
        if (!task.complete) {
          return (
            <TaskCard
              key={uuid.v4()}
              index={id}
              title={task.title}
              priority={task.priority}
              dueDate={Date.parse(task.dueDate)}
              complete={task.complete}
              removed={task.removed}
              isExpanded={task.isExpanded}
            />
          );
        }
      })}
      <Button
        style={styles.addButton}
        onPress={() => {
          createTask();
        }}
      >
        <CustomIcon name="plus-circle" size="45px" color="red" />
      </Button>
    </View>
  );
};

export default PendingBoard;
