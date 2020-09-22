import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class OtherScreen extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Other" isHome={false} navigation={navigation} routeName="HomeScreen" />
                <Text>Help & Feedback screen</Text>
            </View>
        )
    }
}

export default OtherScreen;