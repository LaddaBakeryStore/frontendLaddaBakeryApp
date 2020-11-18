import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native'
import MenuButton from "./menuButton"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MenuCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, image, price, navigation } = this.props
        let Image_Http_URL = { uri: image };

        return (
            <View style={styles.menuItem}>
                <View style={{ flex: 1 }}>
                    <Image source={Image_Http_URL} resizeMode="contain" style={styles.imageSytle} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                    <Text style={{ marginLeft: 5, fontSize: 14 }}>{title}</Text>
                    <Text style={styles.priceStyle}>{price}</Text>
                </View>
                <MenuButton title="BUY" navigation={navigation} routeName='ShoppingCartScreen' style={styles.buttonStyle} 
                fontStyle={styles.fontStyle} breadName={title} breadPrice={price} breadImage={image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuItem: {
        backgroundColor: "#fff",
        marginVertical: 8,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 15
    },
    imageSytle: {
        marginLeft: 7,
        marginRight: 5,
        marginTop: 5,
        width: windowWidth * 0.94,
        height: windowHeight * 0.2,
        borderRadius: 15
    },
    priceStyle: {
        alignSelf: 'flex-end',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FA8100',
        marginRight: 5
    },
    buttonStyle: {
        backgroundColor: "#FD6508",
    },
    fontStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    }
})

export default MenuCard;
