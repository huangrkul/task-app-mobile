import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PendingBoard from '../components/PendingBoard';
import CompleteBoard from './CompleteBoard';
import {Card} from 'react-native-paper';
import {store} from './store.js';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentBox: {
    padding: '16px',
    border: '1px solid #fff',
    borderRadius: '16px'
  },
  unfocused: {
    color: '#999'
  }

})

const MainTaskBoard = (props) => {

  const globalState = useContext(store);
  const [isPending, setPending] = useState(true);
  const pendingFocus = isPending ? '' : styles.unfocused;
  const completeFocus = isPending ? styles.unfocused : '';

  useEffect(() => {
  },[])

  return(
    <View style={classes.container}>
      <View>
        <View style={pendingFocus} onPress={() => {setPending(true)}}>Pending</View>
        <View style={completeFocus} onPress={() => {setPending(false)}}>Completed</View>
      </View>
      <Card elevation={3} style={styles.contentBox}>
        {isPending ? <PendingBoard tasks={globalState.state.tasks} /> : <CompleteBoard tasks={globalState.state.tasks} />}
      </Card>
    </View>
  )
}

export default MainTaskBoard;
