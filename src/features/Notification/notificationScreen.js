import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class NotificationScreen extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Notification" isHome={false} navigation={navigation} routeName="ProfileScreen" />
                <Text>Notification screen</Text>
            </View>
        )
    }
}

export default NotificationScreen;