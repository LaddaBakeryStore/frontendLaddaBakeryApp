import React from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

export default function ImageButton( {title, navigation, routeName} ){
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate( {routeName} )}>
                <Image source={require('../assets/profile.png')} style={{width: 48, height: 48}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
});