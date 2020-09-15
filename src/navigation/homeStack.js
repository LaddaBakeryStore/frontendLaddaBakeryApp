import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../features/Home/homeScreen';
import HomeHeader from '../features/Home/homeHeader'


const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ( {navigation} ) => {
            return {
                headerTitle: () => <HomeHeader title="Hi phantichchai!!" navigation={navigation} />
            }
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);