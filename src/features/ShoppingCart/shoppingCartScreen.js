import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/customButton'
import ShoppingCartCard from './shoppingCartCard'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
        title: "Fourth Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s",
        title: "Fifth Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72a",
        title: "Sixth Item",
    },
];

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props
        const renderItem = ({ item }) => (
            <ShoppingCartCard title={item.title} />
        );

        return (
            <LinearGradient colors={["#FA8100", "#B2590B", "#6C3315"]} style={{ flex: 1 }}>
                <CustomHeader title="" navigation={navigation} routeName="Drawer" />
                <View style={styles.deliveryContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/motorcycle-delivery.png')} style={{ width: 40, height: 40, margin: 5 }} />
                            <Text style={{ color: "#C4455E", fontSize: 18, fontWeight: 'bold' }}>Delivery: ASAP</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row-reverse', margin: 5, alignItems: 'center' }}>
                            <CustomButton title="Change" navigation={navigation} routeName='MapScreen' fontStyle={styles.customButtonTitle} style={styles.customButtonChange} />
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressLine}>991 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330</Text>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2.5, backgroundColor: '#8B380D'}}>
                    
                    </View>
                    <View style={styles.footer}>
                        <CustomButton title="CHECKOUT" navigation={navigation} routeName="PaymentScreen" style={styles.checkOutButton} fontStyle={styles.fontCheckOutButton} />
                    </View>
                </View>
            </LinearGradient>
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