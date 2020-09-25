import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class PaymentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }

    select = (isCheck) => {
        this.setState({ check: isCheck })
    }

    render() {
        const { image, message } = this.props
        const { check } = this.state
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image source={image} style={{ width: 64, height: 64 }} />
                </View>
                <View style={{ flex: 5, justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={styles.messageStyle}>
                        {message}
                    </Text>
                </View>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => {this.select(!check)}}>
                    {
                        check ?
                            <Image source={require('../../assets/correct.png')} style={{ width: 48, height: 48 }} />
                            :
                            <Image source={require('../../assets/accept.png')} style={{ width: 48, height: 48 }} />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        margin: 3
    },
    messageStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
export default PaymentCard;
