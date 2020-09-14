import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../features/Home/homeScreen';
import HomeHeader from '../features/Home/homeHeader'
import LoginScreen from '../features/Login/loginScreen';
import RegisterScreen from '../features/Register/registerScreen';

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <HomeHeader title="Hi phantichchai!!" navigation={navigation} />
            }
        }
    },
    LoginScreen: {
        screen: LoginScreen,
    },
    RegisterScreen: {
        screen: RegisterScreen,
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#D76529', height: 60 }
    }
});

export default createAppContainer(HomeStack);