import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PendingBoard from "./PendingBoard";
import CompleteBoard from "./CompleteBoard";
import { Card } from "react-native-paper";
import { store } from "../js/store.js";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topNav: {
    flexDirection: "row",
  },
  navButton: {
    padding: 16,
    fontSize: 24,
  },
  contentBox: {
    padding: "16px",
    border: "1px solid #fff",
    borderRadius: "16px",
  },
  unfocused: {
    color: "#999",
  },
});

const MainTaskBoard = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [isPending, setPending] = useState(true);
  const pendingFocus = isPending ? "" : styles.unfocused;
  const completeFocus = isPending ? styles.unfocused : "";

  useEffect(() => {
    const initTasks = globalState.state.tasks || [];
    dispatch({ type: "tasks", payload: [...initTasks] });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Text
          style={[pendingFocus, styles.navButton]}
          onPress={() => {
            setPending(true);
          }}
        >
          Pending
        </Text>
        <Text
          style={[completeFocus, styles.navButton]}
          onPress={() => {
            setPending(false);
          }}
        >
          Completed
        </Text>
      </View>
      <Card elevation={3} style={styles.contentBox}>
        {isPending ? (
          <PendingBoard tasks={globalState.state.tasks} />
        ) : (
          <CompleteBoard tasks={globalState.state.tasks} />
        )}
      </Card>
    </View>
  );
};

export default MainTaskBoard;
