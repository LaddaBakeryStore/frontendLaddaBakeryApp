import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class shoppingButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ alignItems: 'center'}}>
                        <Image source={require('../../assets/minus.png')} style={styles.imageMinusSytle} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>1</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/plus.png')} style={styles.imagePlusSytle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        backgroundColor: '#fff', 
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        marginBottom: 8
    },
    imageMinusSytle: {
        width: 30,
        height: 30,
    },
    imagePlusSytle: {
        width: 24,
        height: 24,
    },
})