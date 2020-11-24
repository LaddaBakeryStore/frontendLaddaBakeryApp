import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CustomHeader from '../../components/customHeader'
import axios from 'axios'

class MyOrdersScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            orders: "",
        }
    }

    async componentDidMount() {
        const orderName = this.props.route.params.user.fullName;
        await axios.get('https://ladda-bakery-store.herokuapp.com/api/order/' + orderName)
          .then(res => {
            const orders = res.data;
            this.setState({ orders: orders });    
          })
    }

    render() {
        const {navigation, route} = this.props
        var shows = []
        for(let i = 0; i < this.state.orders.length; i++){
            shows.push(
                <View style={{backgroundColor: "#A26B4E", margin: 5}}>
                    <Text>No: {this.state.orders[i].orderNo}</Text>
                    <Text>Name: {this.state.orders[i].orderName}</Text>
                    <Text>Totalprice: {this.state.orders[i].orderTotalPrice}</Text>
                    <Text>Datetime: {this.state.orders[i].orderTime} {this.state.orders[i].orderDate}</Text>
                    <Text>Status: {this.state.orders[i].orderStatus}</Text>
                    <Text>Deliveryfee: {this.state.orders[i].deliveryFee}</Text>
                </View>
            )
        }
        return (
            <View style={{flex: 1}} colors={["#FA8100", "#E57600", "#CD6A00"]}>
            <View>
                <CustomHeader title="Myorders" isHome={false} navigation={navigation} routeName="ProfileScreen" />
                {shows}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        flex: 1,
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200,
    },
    profileBox: {
        flex: 1,
        backgroundColor: "#fff",
        marginLeft: 25,
        marginRight: 25,
        marginTop: 150
    }
})

export default MyOrdersScreen;