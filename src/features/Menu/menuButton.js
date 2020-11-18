import React, { Component } from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title ,navigation, style, fontStyle, breadName, breadPrice, breadImage, routeName } = this.props;
        const customStyles = StyleSheet.flatten([style]);
        const fontStyles = StyleSheet.flatten([fontStyle]);
        return (
            <TouchableOpacity style={customStyles} onPress={() => navigation.navigate( routeName ,{
                title: breadName,
                price: breadPrice,
                image: breadImage,
            })}>
                <Text style={fontStyles}>
                    { title }
                </Text>
            </TouchableOpacity>
        )
    }
}

export default MenuButton;