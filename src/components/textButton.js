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
        const {title, navigation, routeName} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate( {routeName} )}>
                    <Text>
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