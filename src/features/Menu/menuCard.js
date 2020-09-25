import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MenuCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.menuItem}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: 'https://img.kapook.com/u/2018/surauch/cooking/co1/t2_4.jpg' }} style={styles.imageSytle} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold' }}>Bread</Text>
                    <Text style={{ marginLeft: 5, fontSize: 14 }}>Bread</Text>
                    <Text style={styles.priceStyle}>20</Text>
                </View>
                <Button title="BUY" color="#FA8100" />
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
        width: windowWidth * 0.44,
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
})

export default MenuCard;
