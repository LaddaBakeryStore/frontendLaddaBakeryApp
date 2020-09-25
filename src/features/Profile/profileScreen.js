import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class ProfileScreen extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Profile" isHome={false} navigation={navigation} routeName="HomeScreen" />
                <Text>Profile screen</Text>
            </View>
        )
    }
}

export default ProfileScreen;
