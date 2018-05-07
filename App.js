import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';

import { StackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json

import WelcomeScreen from './app/containers/welcome';
import SignUpScreen from './app/containers/signup';
import HomeScreen from './app/containers/home';
import ImageUploadScreen from './app/containers/imageupload'
import ChatScreen from './app/containers/chatscreen'
import TesterScreen from './app/containers/tester'


const AppStack = StackNavigator({ Home: HomeScreen, ChatScreen: ChatScreen });
const AuthStack = StackNavigator({ SignUp: SignUpScreen, ImageUpload: ImageUploadScreen });
const TestStack = StackNavigator({ TesterScreen: TesterScreen});

const AppNavigator = SwitchNavigator(
  {
    TesterScreen:TestStack,
    WelcomeScreen: WelcomeScreen,
    App: AppStack,
    Auth: AuthStack
  },  
  {
    initialRouteName: 'WelcomeScreen',
  }
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default Root;
