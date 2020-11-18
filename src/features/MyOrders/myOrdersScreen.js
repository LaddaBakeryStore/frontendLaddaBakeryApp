import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'
import axios from 'axios'

class MyOrdersScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            orders: [],
        }
    }

    async componentDidMount() {
        const orderName = this.props.route.params.user.fullName;
        await axios.get('http://192.168.1.46:8085/api/order/' + orderName)
          .then(res => {
            const orders = res.data;
            this.setState({ orders: orders });    
          })
        for (let order of this.state.orders) {
            console.log(order)
        }
    }
    render() {
        const {navigation, route} = this.props
        
        return (
            <View>
                <CustomHeader title="Myorders" isHome={false} navigation={navigation} routeName="ProfileScreen" />
            </View>
        )
    }
}

export default MyOrdersScreen;