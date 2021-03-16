import React, { useState, useContext } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Card, Text, Button, Checkbox, TextInput } from "react-native-paper";
import { store } from "../js/store.js";
import CustomIcon from "../components/CustomIcon";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    border: "1px solid #bbb",
    padding: "16px",
    marginBottom: "16px",
    cursor: "pointer",
  },
  infoBar: {
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  titleBar: {
    flexDirection: "row",
  },
  checkBox: {
    width: "50px",
    height: "50px",
  },
  titleInput: {
    width: "80%",
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    marginTop: "32px",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "#eee",
    borderColor: "#eee",
    borderStyle: "solid",
    borderWidth: "8px",
    borderRadius: "24px",
    padding: "0 16px 0 16px",
    fontSize: "20px",
    marginLeft: "16px",
    cursor: "pointer",
    transition: "all 300ms ease-in-out",
  },
  buttonOneActive: {
    backgroundColor: "#5fcd8d",
    borderColor: "#5fcd8d",
    borderWidth: "8px",
    borderStyle: "solid",
  },
  buttonTwoActive: {
    backgroundColor: "#fb8333",
    borderColor: "#fb8333",
    borderWidth: "8px",
    borderStyle: "solid",
  },
  buttonThreeActive: {
    backgroundColor: "#ff6159",
    borderColor: "#ff6159",
    borderWidth: "8px",
    borderStyle: "solid",
  },
  buttonCollapse: {},
  panel: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
});

const TaskCard = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [priority, setPriority] = useState(props.priority);
  const [isExpanded, setExpand] = useState(props.isExpanded);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState(props.title);

  const buttonOneStyle = priority === 1 ? styles.buttonOneActive : "";
  const buttonTwoStyle = priority === 2 ? styles.buttonTwoActive : "";
  const buttonThreeStyle = priority === 3 ? styles.buttonThreeActive : "";
  const expandStyle = isExpanded ? styles.panel : styles.hide;

  const handleChange = (category, value) => {
    const newList = [...globalState.state.tasks];
    switch (category) {
      case "check":
        newList[props.index].complete = newList[props.index].complete
          ? false
          : true;
        dispatch({ type: "tasks", payload: newList });
        break;
      case "title":
        setTitle(value);
        newList[props.index].title = value;
        break;
      case "priority":
        setPriority(value);
        newList[props.index].priority = value;
        break;
      // case "date":
      //   setDate(value);
      //   newList[props.index].dueDate = value;
      //   break;
      case "expand":
        newList[props.index].isExpanded = value;
        setExpand(newList[props.index].isExpanded);
      default:
        break;
    }
  };

  return (
    <Card style={styles.main}>
      <Pressable
        style={styles.infoBar}
        onPress={() => {
          handleChange("expand", true);
        }}
      >
        <View>
          <View style={styles.titleBar}>
            <Button
              onPress={() => {
                handleChange("check");
              }}
            >
              <CustomIcon
                name={props.complete ? "checkbox-marked" : "checkbox-blank"}
                size="45px"
                color="gray"
              />
            </Button>
            <TextInput
              editable={isExpanded ? true : false}
              value={title}
              onChange={() => {
                handleChange("title", e.target.value);
              }}
              style={styles.titleInput}
            />
          </View>
          <View></View>
        </View>
      </Pressable>
      <View style={[styles.buttonGroup, expandStyle]}>
        <Button
          onPress={(e) => {
            handleChange("priority", 1);
          }}
          style={[styles.buttons, buttonOneStyle]}
        >
          low
        </Button>
        <Button
          onPress={(e) => {
            handleChange("priority", 2);
          }}
          style={[styles.buttons, buttonTwoStyle]}
        >
          medium
        </Button>
        <Button
          onPress={(e) => {
            handleChange("priority", 3);
          }}
          style={[styles.buttons, buttonThreeStyle]}
        >
          high
        </Button>
        <Button
          onPress={() => {
            handleChange("expand", false);
          }}
          style={styles.buttonCollapse}
        >
          <CustomIcon name="arrow-collapse-up" color="gray" />
        </Button>
      </View>
    </Card>
  );
};

export default TaskCard;
