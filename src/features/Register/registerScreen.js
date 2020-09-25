import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, FlatList, Dimensions} from 'react-native'
import CustomButton from '../../components/customButton'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'

var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

class RegisterScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
    render(){
        const {navigation} =this.props
        return (
            <SafeAreaView style={styles.container}>
                <CustomHeader title="" isHome={false} navigation={navigation} routeName="LoginScreen" />
                <FlatList ListHeaderComponent={
                    <LinearGradient colors={['#D76529', '#E97314', '#FA8100']} > 
                        <View style={{alignItems: "center", justifyContent: "center", zIndex: 1} }>
                            <View>
                                <Image source={require('../../assets/bread.png')} />
                            </View>
                            <View>
                                <Text style={styles.appName}>
                                    {"\n"}
                                    Registration
                                    {"\n"}
                                    {"\n"}
                                </Text>
                            </View>
                        </View>
                        <View style={{alignItems: "center", justifyContent: "center", zIndex: 1} }>
                            <TextInput 
                                placeholderTextColor = "#545050"
                                placeholder={" Full name"}
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <TextInput 
                                placeholder={" User name"}
                                placeholderTextColor = "#545050"
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <TextInput 
                                placeholderTextColor = "#545050"
                                placeholder={" Password"}
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <TextInput
                                placeholderTextColor = "#545050" 
                                placeholder={" Email"}
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <TextInput 
                                placeholderTextColor = "#545050"
                                placeholder={" Tel."}
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <TextInput 
                                placeholderTextColor = "#545050"
                                placeholder={" Address"}
                                style={styles.textInputBox}
                                onChangeText={() => this.setState({text: this.state.text})}/>
                            <Text></Text>
                            <View style={ {flexDirection: 'row'} }>
                                <View style= { {flex: 1} }>
        
                                </View>
                                <View style= { {flex: 8} }>
                                    <Text style={styles.textWhite}>More details about address</Text>
                                </View>
                            </View>                    
                            <TextInput 
                                style={styles.textDetailBox}
                                onChangeText={() => this.setState({text: this.state.text})}
                                multiline/>
                            <Text></Text>
                            <View style={ {flexDirection: 'row'} }>
                                <View style={ {flex: 1, alignItems: "flex-end"}}></View>
                                <View style={ {flex: 1, paddingTop: 5}}>
                                    <Text>Agree with Terms & Conditions</Text>
                                </View>
                            </View>  
                            <View style={ {flexDirection: 'row'} }>
                                <View style={ {flex: 1}}>
                                    
                                </View>
                                <View style={ {flex: 1}}>
                                    <CustomButton title="Register" navigation={navigation} routeName="LoginScreen" style={styles.registerButton} fontStyle={styles.fontRegisterButton}/>
                                </View>
                            </View>     
                        </View>
                        <LinearGradient colors={['#CEC1C1', '#999090', '#676161']} style={styles.ovalShapeView}>
        
                        </LinearGradient>
                    </LinearGradient>
                }/>
            </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
    textInputBox: {
        margin: 5,
        borderWidth: 0,
        borderColor: "#fff",
        borderRadius: 12,
        width: "80%",
        borderBottomWidth: 3,
        height: height * 0.05,
    },
    container: {
        backgroundColor: '#D76529',
        flex: 1,   
    },
    appName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        letterSpacing: 1,
    },
    textDetailBox: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 12,
        width: "80%",
        backgroundColor: "#FFF",
    },
    textWhite: {
      color: "#545050"
    },
    ovalShapeView: {
        margin: 170,
        width: width * 1.1,
        height: height * 0.6,
        borderRadius: height / 2,
        transform: [
            {scaleY: 2}
        ],
        zIndex: 0,
        position: 'absolute',
        alignSelf: 'center'
        
    },
    registerButton: {
        height: height * 0.07,
        width: width * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#D76529",
    },
    fontRegisterButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    }
    
})

export default RegisterScreen;