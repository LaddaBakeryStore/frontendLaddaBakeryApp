import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, Dimensions, FlatList} from 'react-native'
import CustomButton from '../../components/customButton'
import TextButton from '../../components/textButton'
import CustomHeader from '../../components/customHeader'


var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
    render() {
        const {navigation} = this.props
        return (
        <View style={styles.container}>
            <CustomHeader title="Login" isHome={false} navigation={navigation} routeName="HomeScreen" />
            <FlatList ListHeaderComponent={
            <View>
                <View style={{alignItems: "center", justifyContent: "center"} }>
                    <Image resizeMode = 'cover' source={require('../../assets/bread.png')} style={styles.image}/>
                    <Text style={styles.appName}>
                        {"\n"}
                        Ladda Bakery Store
                        {"\n"}{"\n"}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{ alignItems: "center"}}>
                        <TextInput 
                            placeholder={" ID or Email"}
                            style={styles.textInputBox}
                            onChangeText={() => this.setState({text: this.state.text})} />
                        <Text></Text>
                        <TextInput
                            placeholder={" Password"}
                            style={styles.textInputBox}
                            onChangeText={() => this.setState({text: this.state.text})} />        
                    </View>
                    <View style={ {flexDirection: 'row'} }>
                        <View style={ {flex: 1.25}}>
                        </View>
                        <View style={ {flex: 9, alignItems:'flex-start'}}>
                            <TextButton title="Sign UP" navigation={navigation} routeName="RegisterScreen" />
                        </View>
                    </View>
                    <View style={ {alignItems: "center"} }>
                        <Text></Text>
                        <CustomButton title="Login" navigation={navigation} style={styles.loginBox} routeName="HomeScreen"/>
                    </View>
                </View>
            </View>} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputBox: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 17,
        width: "72%",
        backgroundColor: "#FFF"
    },
    container: {
        backgroundColor: '#D76529',
        flex: 1,
        flexDirection: "column"
    },
    appName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F0F0',
        letterSpacing: 1,
    },
    loginBox: {
        borderRadius: 25,
        backgroundColor: "#FFF",
        width: "72%",
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1
    },
    image: {
        width: width * 0.4,
        height: height * 0.2
    }
})

export default LoginScreen;