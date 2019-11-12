/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import TodoList from './TodoList'
import { connect } from 'react-redux'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  Text,
  StatusBar,
  Keyboard,
  FlatList,
  AsyncStorage,
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

const store = createStore(reducer)

class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }

};


export default (App);
