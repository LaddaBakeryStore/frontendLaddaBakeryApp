import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class MyOrdersScreen extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Myorders" isHome={false} navigation={navigation} routeName="HomeScreen" />
                <Text>My orders screen</Text>
            </View>
        )
    }
}

export default MyOrdersScreen;