import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

class TextButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {title, navigation, routeName, fontStyle} = this.props;
        const fontStyles = StyleSheet.flatten([fontStyle]);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate( routeName )}>
                    <Text style={fontStyles}>
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
        padding: 10
    },
});

export default TextButton;