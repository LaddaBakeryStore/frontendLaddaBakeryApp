import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image 
} from 'react-native'
import ImageButton from '../../components/imageButton'

export default function HomeHeader( {title, navigation} ) {
    return (
        <View style={styles.header}>
            <View style={{flex: 0.45}}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={{flex: 0.1 }}>
                <ImageButton title="Login" navigation={navigation} routeName="LoginScreen" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F0F0',
        letterSpacing: 1,
    }
})