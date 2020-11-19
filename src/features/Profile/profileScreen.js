import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import CustomHeader from '../../components/customHeader'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

class ProfileScreen extends Component {

    render() {
        const { navigation, route } = this.props
        console.log()
        return (
            <View style={styles.container}>
                <View style={styles.circle}>
                    <CustomHeader title="Profile" isHome={false} navigation={navigation} routeName="HomeScreen"/>
                    <View style={styles.profileBox}>
                        <Text>Username: {route.params.user.userName}</Text>
                        <Text>Name: {route.params.user.fullName}</Text>
                        <Text>Address: {route.params.user.address}</Text>
                        <Text>MoreDetail: {route.params.user.moreDetail}</Text>
                        <Text>Email: {route.params.user.email}</Text>
                        <Text>Tel: {route.params.user.tel}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.5, backgroundColor: '#fff', justifyContent: 'space-evenly'}}>
                    <Button title="Notification" onPress={() => navigation.navigate("NotificationScreen", {
                        user: route.params.user
                    })} />
                    <Button title="Orders" onPress={() => navigation.navigate("MyOrdersScreen", {
                        user: route.params.user
                    })} />
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
        marginTop: 150
    }
})

export default ProfileScreen;
