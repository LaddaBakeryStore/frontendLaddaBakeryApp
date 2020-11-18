import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

class ProfileScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <LinearGradient colors={["#FA8100", "#E57600", "#CD6A00"]} style={styles.circle}>
                    <CustomHeader title="Profile" isHome={false} navigation={navigation} routeName="HomeScreen" />
                    <View style={styles.profileBox}>
                        <Text></Text>
                    </View>
                </LinearGradient>
                <View style={{ flex: 0.5, backgroundColor: '#000'}}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        flex: 1,
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200,
    },
    profileBox: {
        flex: 1,
        backgroundColor: "#fff",
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 50,
        marginTop: 150
    }
})

export default ProfileScreen;
