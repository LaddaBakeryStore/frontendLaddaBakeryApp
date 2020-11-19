import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'

class NotificationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            bills: "",
        }
    }

    async componentDidMount() {
        const recipientName = this.props.route.params.user.fullName;
        await axios.get('http://192.168.1.46:8085/api/bill/' + recipientName)
          .then(res => {
            const bills = res.data;
            this.setState({ bills: bills });    
          })
    }

    render() {
        const {navigation} = this.props
        var shows = []
        for(let i = 0; i < this.state.bills.length; i++){
            shows.push(
                <View style={{backgroundColor: "#A26B4E", margin: 5}}>
                    <Text>No: {this.state.bills[i].billNo}</Text>
                    <Text>Name: {this.state.bills[i].billAddress}</Text>
                    <Text>Totalprice: {this.state.bills[i].billStatus}</Text>
                    <Text>Datetime: {this.state.bills[i].billTime} {this.state.bills[i].billDate}</Text>
                    <Text>Status: {this.state.bills[i].billTotalPrice}</Text>
                    <Text>senderName: {this.state.bills[i].senderName}</Text>
                    <Text>recipientName: {this.state.bills[i].recipientName}</Text>
                    <Text>{this.state.bills[i].paymentMethod}</Text>
                    <Text>{this.state.bills[i].billOrderNo}</Text>
                </View>
            )
        }
        return (
            <LinearGradient style={{flex: 1}} colors={["#FA8100", "#E57600", "#CD6A00"]}>
            <View>
                <CustomHeader title="Notification" isHome={false} navigation={navigation} routeName="ProfileScreen" />
                {shows}
            </View>
            </LinearGradient>
        )
    }
}

export default NotificationScreen;