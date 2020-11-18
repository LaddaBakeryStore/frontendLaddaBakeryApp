import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Modal, TouchableOpacity, Dimensions } from 'react-native'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/customButton';
import PaymentCard from './paymentCard';
import axios from 'axios';

const windowHeight = Dimensions.get('window').height;


class PaymentScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            orders: [],
            bills: [],
        }
    }
    setDialogBoxVisible = (setVisible) => {
        this.setState({ visible: setVisible })
        this.props.navigation.navigate('HomeScreen')
    }

    async handleSubmitConfirmButton(event) {
        event.preventDefault();
        this.setState({ visible: true });
        const url = 'http://192.168.1.46:8085/api/order'
        await axios.get(url)
          .then(res => {
              const orders = res.data;
              this.setState({orders: orders})
          })
        var date = new Date();
        const orderTime = date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds();
        const orderDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        var headers = {
            'Content-Type': 'application/่json' 
        }
        const order = {
            orderNo: this.state.orders.length,
            orderName: this.props.route.params.user.fullName,
            orderTotalPrice: "",
            orderAddress: this.props.route.params.user.address,
            orderTime: orderTime,
            orderStatus: "prepare",
            orderDate: orderDate,
            deliveryFee: "30"
        }
        const url_post = 'http://192.168.1.46:8085/api/order?' + "orderNo=" + order.orderNo +
                                                        "&orderName="+ order.orderName +
                                                        "&orderTotalPrice="+ order.orderTotalPrice +
                                                        "&orderAddress="+ order.orderAddress +
                                                        "&orderTime="+ order.orderTime +
                                                        "&orderStatus="+ order.orderStatus +
                                                        "&orderDate="+ order.orderDate +
                                                        "&deliveryFee="+ order.deliveryFee
        axios.post(url_post)
          .then(res => {    
              console.log(res.data)
        })

        const url_bill = 'http://192.168.1.46:8085/api/bill'
        await axios.get(url_bill)
          .then(res => {
              const bills = res.data;
              this.setState({bills: bills})
        })

        const bill = {
            billNo: "",
            billAddress: "",
            billStatus: "",
            billTotalPrice: "",
            billDate: "", 
            billTime: "", 
            senderName: "",
            recipientName: "", 
            paymentMethod: "",
        }
        const url_port_bill = "http://192.168.1.46:8085/api/bill/?" + "billNo=" + bill.billNo +
                                                            "&billAddress=" + bill.billAddress +
                                                            "&billStatus=" + bill.billStatus +
                                                            "&billTotalPrice=" + bill.billTotalPrice +
                                                            "&billDate=" + bill.billDate +
                                                            "&billTime=" + bill.billTime +
                                                            "&senderName=" + bill.senderName +
                                                            "&recipientName=" + bill.recipientName +
                                                            "&paymentMethod=" + bill.paymentMethod;
        axios.post(url_port_bill)
           .then(res => {    
            console.log(res.data)
        })
    }

    render() {
        const { navigation, route } = this.props
        const { visible } = this.state
        
        return (
            <LinearGradient style={{ flex: 1 }} colors={["#FA8100", "#B78047", "#808080"]} >
                <View style={{ flex: 1 }}>
                    <CustomHeader title="Payment channals" navigation={navigation} routeName="ShoppingCartScreen" />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 22 }}>{route.params.bread}</Text>
                    <PaymentCard message="Moblie Banking" image={require('../../assets/bank.png')} />
                    <PaymentCard message="Credit/Debit card" image={require('../../assets/credit.png')} />
                    <PaymentCard message="Cash on Delivery" image={require('../../assets/delivery.png')} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
                    <View style={styles.confirmButtonContainer}>
                        <TouchableOpacity onPress={(event) => {this.handleSubmitConfirmButton(event)} } style={styles.confirmButton}>
                            <Text style={styles.confirmButtonFont}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    transparent={true}
                    visible={this.state.visible}
                    animationType="slide"
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.fontDialogBox}>Thank you</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={styles.buttonInDialogBox} onPress={() => { this.setDialogBoxVisible(!visible) }}>
                                    <Text style={styles.fontButtonOK}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    confirmButtonContainer: {
        justifyContent: 'center',
        backgroundColor: '#D76529',
    },
    confirmButton: {
        margin: 10,
        backgroundColor: '#FA8100',
        borderColor: '#707070',
        borderWidth: 1,
    },
    confirmButtonFont: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    fontDialogBox: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#000000aa'
    },
    buttonInDialogBox: {
        backgroundColor: '#FA8100',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#707070'
    },
    fontButtonOK: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    modalView: {
        flex: 1,
        margin: 50,
        marginVertical: windowHeight * 0.3,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})

export default PaymentScreen;