import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

class ImageButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigation, routeName} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate( routeName )}>
                    <Image source={require('../assets/profile.png')} style={{width: 48, height: 48}}/>
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

export default ImageButton;