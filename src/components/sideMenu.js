import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './textButton'

class SideMenu extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>

        </View>
        <View style={styles.bodyContainer}>
          <ScrollView>
            <TextButton title="Profile" navigation={navigation} routeName="ProfileScreen"/>
            <TextButton title="Notification" navigation={navigation} routeName="NotificationScreen"/>
            <TextButton title="MyOrders" navigation={navigation} routeName="MyOrdersScreen"/>
            <TextButton title="Feedback" navigation={navigation} routeName="OtherScreen"/>
            <TextButton title="Help" navigation={navigation} routeName="OtherScreen"/>
          </ScrollView>
        </View>
        <View style={styles.footerContainer}>
          <TextButton title="Login" navigation={navigation} routeName="LoginScreen"/>
        </View>
      </View>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContainer: {
    justifyContent: 'flex-end',
    backgroundColor: "#2E2D2D",
    flex: 1
  },
  headerContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#FF8400',
    flex: 2
  },
  bodyContainer: {
    backgroundColor: "#2E2D2D",
    flex: 7
  }
})