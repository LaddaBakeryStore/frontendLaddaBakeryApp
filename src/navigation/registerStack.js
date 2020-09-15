import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../features/Register/registerScreen';

const screens = {
    RegisterScreen: {
      screen: RegisterScreen,
    },
  }
  
const RegisterStack = createStackNavigator(screens);

export default RegisterStack;
