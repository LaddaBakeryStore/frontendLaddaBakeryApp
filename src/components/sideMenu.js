import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextButton from './textButton'
import LinearGradient from 'react-native-linear-gradient';

class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: -1.25 }}
          colors={['#FF8400', '#BE6200', '#7D4100']} style={styles.headerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Image style={styles.logoStyle} source={require("../assets/bread.png")} />
            </View>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', marginVertical: 20 }}>
              <Text style={styles.logoStyleFont}>Ladda</Text>
              <Text style={styles.logoStyleFont}>Bakery</Text>
              <Text style={styles.logoStyleFont}>Store</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.bodyContainer}>
          <ScrollView>
            <TouchableOpacity style={styles.drawerTouch} onPress={() => navigation.navigate('ProfileScreen')}>
              <Image style={styles.iconLogo} source={require("../assets/profile-white.png")} />
              <TextButton title="Profile" navigation={navigation} routeName="ProfileScreen" fontStyle={styles.drawerFontStyle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerTouch} onPress={() => navigation.navigate('NotificationScreen')}>
              <Image style={styles.iconLogo} source={require("../assets/notification.png")} />
              <TextButton title="Notification" navigation={navigation} routeName="NotificationScreen" fontStyle={styles.drawerFontStyle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerTouch} onPress={() => navigation.navigate('MyOrdersScreen')}>
              <Image style={styles.iconLogo} source={require("../assets/history.png")} />
              <TextButton title="MyOrders" navigation={navigation} routeName="MyOrdersScreen" fontStyle={styles.drawerFontStyle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerTouch} onPress={() => navigation.navigate('OtherScreen')}>
              <Image style={styles.iconLogo} source={require("../assets/feedback.png")} />
              <TextButton title="Feedback" navigation={navigation} routeName="OtherScreen" fontStyle={styles.drawerFontStyle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerTouch} onPress={() => navigation.navigate('OtherScreen')}>
              <Image style={styles.iconLogo} source={require("../assets/help.png")} />
              <TextButton title="Help" navigation={navigation} routeName="OtherScreen" fontStyle={styles.drawerFontStyle} />
            </TouchableOpacity>

          </ScrollView>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.loginTouch} onPress={() => navigation.navigate('OtherScreen')}>
            <Image style={styles.iconLogo} source={require("../assets/login.png")} />
            <TextButton title="Login" navigation={navigation} routeName="LoginScreen" fontStyle={styles.drawerFontStyle}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContainer: {
    justifyContent: 'flex-end',
    backgroundColor: "#2E2D2D",
    flex: 1
  },
  headerContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#FF8400',
    flex: 2
  },
  bodyContainer: {
    backgroundColor: "#2E2D2D",
    flex: 7,

  },
  logoStyle: {
    marginVertical: 8,
  },
  logoStyleFont: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#000",
  },
  drawerFontStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D76529',
    marginLeft: 12,
  },
  iconLogo: {
    width: 60,
    height: 60,
  },
  drawerTouch: {
    flexDirection: "row",
    paddingTop: 20,
    marginLeft: 10,
  },
  loginTouch: {
    flexDirection: "row",
    borderWidth: 1,
    borderTopColor: '#fff',
  }
})