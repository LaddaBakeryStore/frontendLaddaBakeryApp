import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

class ShoppingCartButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title ,navigation, routeName, style, fontStyle, breadName, breadPrice} = this.props;
        const customStyles = StyleSheet.flatten([style]);
        const fontStyles = StyleSheet.flatten([fontStyle]);
        return (
            <TouchableOpacity style={customStyles} onPress={() => navigation.navigate( routeName, {
                bread: breadName,
                price: breadPrice,
            } )}>
                <Text style={fontStyles}>
                    { title }
                </Text>
            </TouchableOpacity>
        )
    }
}

export default ShoppingCartButton;