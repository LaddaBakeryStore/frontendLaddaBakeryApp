import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeHeader from '../features/Home/homeHeader'

import HomeStack from './homeStack';
import LoginStack from './loginStack';
import RegisterStack from './registerStack';

const screens = {
  HomeScreen: {
    screen: HomeStack,
    navigationOptions: ( {navigation} ) => {
        return {
            headerTitle: () => <HomeHeader title="Hi phantichchai!!" navigation={navigation} />
        }
    }
  },
  LoginScreen: {
    screen: LoginStack,
  },
  RegisterScreen: {
      screen: RegisterStack,
  }
}

const RootNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#D76529', height: 60 }
}
});

export default createAppContainer(RootNavigator);