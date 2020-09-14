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
        const { title ,navigation, routeName } = this.props;
        return (
            <View style={styles.container}> 
                <TouchableOpacity style={styles.loginBox} onPress={() => navigation.navigate( {routeName} )}>
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
        padding: 10, 
    },
    loginBox: {
        borderRadius: 12,
        backgroundColor: "#FFF",
        width: "72%",
        height: "55%",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1
    }
    
});


export default CustomButton;