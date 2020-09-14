import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title ,navigation, routeName, style, fontStyle } = this.props;
        const customStyles = StyleSheet.flatten([style]);
        const fontStyles = StyleSheet.flatten([fontStyle]);
        return (
            <View style={styles.container}> 
                <TouchableOpacity style={customStyles} onPress={() => navigation.navigate( {routeName} )}>
                    <Text style={fontStyle}>
                        { title }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, 
    },
});


export default CustomButton;