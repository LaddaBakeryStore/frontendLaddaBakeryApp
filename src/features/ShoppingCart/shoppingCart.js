import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import CustomHeader from '../../components/customHeader'

class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Shopping Cart" navigation={navigation} routeName="Drawer" />
                <Text>Shopping cart screen</Text>
                <Button title="Address" onPress={() => navigation.navigate('MapScreen')}/>
                <Button title="Checkout" onPress={() => navigation.navigate('PaymentScreen')}/>
            </View>
        )
    }
}

export default ShoppingCart;