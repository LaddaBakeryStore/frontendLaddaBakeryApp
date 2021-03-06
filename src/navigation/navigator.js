import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../features/Home/homeScreen'
import LoginScreen from '../features/Login/loginScreen'
import RegisterScreen from '../features/Register/registerScreen'
import ProfileScreen from '../features/Profile/profileScreen'
import NotificationScreen from '../features/Notification/notificationScreen'
import MyOrdersScreen from '../features/MyOrders/myOrdersScreen'
import OtherScreen from '../features/Other/otherScreen'
import SideMenu from '../components/sideMenu'
import MenuScreen from '../features/Menu/menuScreen';
import ShoppingCartScreen from '../features/ShoppingCart/shoppingCartScreen';
import MapScreen from '../features/Map/MapScreen';
import PaymentScreen from '../features/Payment/paymentScreen';

const navOptionHandler = () => ({
  headerShown: false
})

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator  initialRouteName="HomeScreen" drawerContent={(props) => <SideMenu navigation={props.navigation}/>}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} options={navOptionHandler} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen}  options={navOptionHandler}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={navOptionHandler}/>
        <Drawer.Screen name="NotificationScreen" component={NotificationScreen} options={navOptionHandler}/>
        <Drawer.Screen name="MyOrdersScreen" component={MyOrdersScreen} options={navOptionHandler}/>
        <Drawer.Screen name="OtherScreen" component={OtherScreen} options={navOptionHandler}/>
    </Drawer.Navigator>
  )
}


const StackApp = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Drawer">
        <StackApp.Screen name="Drawer" component={DrawerNavigator}  options={navOptionHandler}/>
        <StackApp.Screen name="HomeScreen" component={HomeScreen} options={navOptionHandler}/>
        <StackApp.Screen name="RegisterScreen" component={RegisterScreen}  options={navOptionHandler}/>
        <StackApp.Screen name="MenuScreen" component={MenuScreen} options={navOptionHandler} />
        <StackApp.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={navOptionHandler} />
        <StackApp.Screen name="MapScreen" component={MapScreen} options={navOptionHandler} />
        <StackApp.Screen name="PaymentScreen" component={PaymentScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;