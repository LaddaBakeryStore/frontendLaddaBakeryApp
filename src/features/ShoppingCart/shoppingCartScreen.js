import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native'
import CustomHeader from '../../components/customHeader'
import ShoppingCartCard from './shoppingCartCard'
import ShoppingCartButton from './shoppingCartButton'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
];

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quality: 1,
        }
    }
    render() {
        const { navigation, route} = this.props
        const renderItem = ({ item }) => (
            <ShoppingCartCard title={route.params.title} navigation={navigation} price={route.params.price} image={route.params.image}/>
        );

        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title="" navigation={navigation} routeName="MenuScreen" />
                <View style={styles.deliveryContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/motorcycle-delivery.png')} style={{ width: 40, height: 40, margin: 5 }} />
                            <Text style={{ color: "#C4455E", fontSize: 18, fontWeight: 'bold' }}>Delivery: ASAP</Text>
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressLine}>{route.params.user.address}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2.5, backgroundColor: '#8B380D'}}>
                        <Button title="1 ชิ้น" onPress={() => this.setState({quality: 1})}/>
                        <Button title="2 ชิ้น"  onPress={() => this.setState({quality: 2})}/>
                        <Button title="5 ชิ้น"  onPress={() => this.setState({quality: 5})}/>
                        <Button title="10 ชิ้น"  onPress={() => this.setState({quality: 10})}/>
                    </View>
                    <View style={styles.footer}>
                        <ShoppingCartButton title="CHECKOUT" navigation={navigation} routeName="PaymentScreen" style={styles.checkOutButton} 
                        fontStyle={styles.fontCheckOutButton} breadName={route.params.title} breadPrice={route.params.price} user={route.params.user}
                        breadQuality={this.state.quality}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deliveryContainer: {
        flex: 1,
        backgroundColor: "#8B380D",
    },
    addressContainer: {
        flex: 2,
        backgroundColor: '#D8CFCF',
        margin: 13,
        marginBottom: 25,
        borderRadius: 15,
    },
    addressLine: {
        textDecorationLine: "underline",
        padding: 13,
    },
    customButtonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000000"
    },
    customButtonChange: {
        backgroundColor: '#6A6363',
        borderColor: "#707070",
        borderWidth: 2,
        borderRadius: 50,
        padding: 5
    },
    checkOutButton: {
        backgroundColor: '#FA8100',
        padding: 5,
        margin: 8,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#707070",
        alignItems: 'center'
    },
    fontCheckOutButton: {
        fontWeight: 'bold',
        color: "#fff",
    },
    footer: {
        flex: 1, 
        justifyContent: 'flex-end', 
        backgroundColor: '#D76529'
    }
})

export default ShoppingCart;