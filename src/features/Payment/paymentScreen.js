import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class PaymentScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Payment channals" navigation={navigation} routeName="ShoppingCartScreen" />
                <Text>Payment screen</Text>
            </View>
        )
    }
}

export default PaymentScreen;