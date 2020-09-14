import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView} from 'react-native'
import CustomBottom from '../../components/customBottom'
import { ScrollView } from 'react-native-gesture-handler' 



export default function LoginScreen( {navigation} ) {
    const [text, setText] = React.useState('');
    return (

    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"} }>
            <View style={{flex: 2.3}}>
                <Image source={require('../../assets/bread.png')} />
            </View>
            <View style={{flex: 0.5}}>
                <Text style={styles.appName}>
                    Registration
                </Text>
            </View>
        </View>
        <View style={{flex: 3,alignItems: "center", justifyContent: "center"} }>
            <TextInput 
                placeholderTextColor = "#545050"
                placeholder={" Full name"}
                style={styles.textInputBox}
                onChangeText={text => setText(text)}/>
            <TextInput 
                    placeholder={" User name"}
                    placeholderTextColor = "#545050"
                    style={styles.textInputBox}
                    onChangeText={text => setText(text)}/>
            <TextInput 
                    placeholderTextColor = "#545050"
                    placeholder={" Password"}
                    style={styles.textInputBox}
                    onChangeText={text => setText(text)}/>
            <TextInput
                    placeholderTextColor = "#545050" 
                    placeholder={" Email"}
                    style={styles.textInputBox}
                    onChangeText={text => setText(text)}/>
            <TextInput 
                    placeholderTextColor = "#545050"
                    placeholder={" Tel."}
                    style={styles.textInputBox}
                    onChangeText={text => setText(text)}/>
            <TextInput 
                    placeholderTextColor = "#545050"
                    placeholder={" Address"}
                    style={styles.textInputBox}
                    onChangeText={text => setText(text)}/>
            <Text style={styles.textWhite}>
                More details about address
            </Text>
            <TextInput 
                    style={styles.textDetailBox}
                    onChangeText={text => setText(text)}/>   
             <View style={{flex: 1,height: "99%"}}>
                <CustomBottom title="Register" navigation={navigation} routeName="HomeScreen" />
            </View>      
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInputBox: {
        borderWidth: 0,
        borderColor: "#000",
        borderRadius: 12,
        width: "80%",
        height: "10%",
        borderBottomWidth: 3
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
        height: "20%",
        backgroundColor: "#FFF",
    },
    textWhite: {
      backgroundColor: "#FFF",
    }
    
})