import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  Text,
  CheckBox,
  StatusBar,
  Keyboard,
  FlatList,
  AsyncStorage,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Item } from 'react-native/Libraries/Components/Picker/Picker';
import { isTSEnumMember } from '@babel/types';

import { onChangeTask, createTask, cheackComplete, completeState } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TodoList extends React.Component {


  onChange = (value) => {
    this.props.onChangeTask(value);
  }

  addTask = async () => {

    console.log("wh");

    this.props.createTask(this.props.task);

    try {
      await AsyncStorage.setItem('data', JSON.stringify((this.props.tasks)))
    }
    catch (e) {

      console.log("e", e);

    }
  }


  checked(index) {
    Alert.alert(
      'Oops!',
      'Are You sure?',
      [
        {
          text: 'Sure',
          onPress: () => this.props.cheackComplete(index),
        }]
    )

  }

  componentDidMount = async () => {
    // const dataFromStorage = await AsyncStorage.getItem('data');
    // console.log("dataFromStorage", dataFromStorage);

    // if (dataFromStorage) {
    //   console.log("stored")
    //   this.props.tasks = JSON.parse(dataFromStorage);
    // }
    // else {
    //   console.log("not stord", dataFromStorage);

    // }
  }

  render() {

    return (
      < View >
        <TextInput placeholder="enter somthing" value={this.props.task} onChangeText={this.onChange} />
        <View style={styles.buttonContainer}><Button title="Add" onPress={this.addTask} /></View>
        {/* {this.props.tasks.map(e => (
          <Text>{e}</Text>
        ))} */}

        < FlatList
          data={this.props.tasks}
          renderItem={({ item, index }) =>
            <View>
              <Text>{item}</Text>
              <CheckBox value={this.props.complete} onChange={() => this.checked(index)} />
            </View>
          }
        />
      </View >
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  inputSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listSection: {
    flex: 2
  },
  buttonContainer: {
    paddingTop: 20,
    paddingRight: 10,
    width: 100,
  }
});


const mapStateToProps = (state) => {
  return {
    task: state.task,
    tasks: state.tasks,
    complete: state.complete

  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onChangeTask,
    createTask,
    cheackComplete,
    completeState,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


