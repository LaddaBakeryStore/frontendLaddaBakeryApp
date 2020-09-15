import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../features/Login/loginScreen';

const screens = {
    LoginScreen: {
      screen: LoginScreen,
    },
  }
  
const LoginStack = createStackNavigator(screens);

export default LoginStack;
