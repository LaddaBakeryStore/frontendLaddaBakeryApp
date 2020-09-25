import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Modal, TouchableOpacity, Dimensions } from 'react-native'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/customButton';
import PaymentCard from './paymentCard';

const windowHeight = Dimensions.get('window').height;


class PaymentScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    setDialogBoxVisible = (setVisible) => {
        this.setState({ visible: setVisible })
        this.props.navigation.navigate('Drawer')
    }

    render() {
        const { navigation } = this.props
        const { visible } = this.state
        return (
            <LinearGradient style={{ flex: 1 }} colors={["#FA8100", "#B78047", "#808080"]} >
                <View style={{ flex: 1 }}>
                    <CustomHeader title="Payment channals" navigation={navigation} routeName="ShoppingCartScreen" />
                </View>
                <View style={{ flex: 7 }}>
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 22 }}>Ladda Store</Text>
                    <PaymentCard message="Moblie Banking" image={require('../../assets/bank.png')} />
                    <PaymentCard message="Credit/Debit card" image={require('../../assets/credit.png')} />
                    <PaymentCard message="Cash on Delivery" image={require('../../assets/delivery.png')} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
                    <View style={styles.confirmButtonContainer}>
                        <TouchableOpacity onPress={() => { this.setState({ visible: true }) }} style={styles.confirmButton}>
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