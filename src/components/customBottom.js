import React from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

export default function ImageButton( {title, navigation, routeName} ){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginBox}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
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