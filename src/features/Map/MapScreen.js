import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class MapScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Map" navigation={navigation} routeName="ShoppingCartScreen" />
                <Text>Map screen</Text>
            </View>
        )
    }
}

export default MapScreen;