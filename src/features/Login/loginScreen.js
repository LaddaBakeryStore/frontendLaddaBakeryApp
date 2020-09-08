import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image} from 'react-native'
import CustomBottom from '../../components/customBottom'

export default function LoginScreen( {navigation} ) {
    const [text, setText] = React.useState('');
    return (
    <View style={styles.container}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"} }>
            <Image source={require('../../assets/bread.png')} />
            <Text style={styles.appName}>
            Ladda Bakery Store
            </Text>
        </View>
        <View style={{flex: 1}}>
            <View style={{flex: 0.7, alignItems: "center", justifyContent: "space-between"}}>
            <TextInput 
                placeholder={" ID or Email"}
                style={styles.textInputBox}
                onChangeText={text => setText(text)}/>
            <TextInput
                placeholder={" Password"}
                style={styles.textInputBox}
                onChangeText={text => setText(text)}/>        
            </View>
            <Text style={{flex: 0.1}}>Sign UP</Text>
        </View>
        <View style={{flex: 1}}>
            <CustomBottom />
        </View>

    
    </View>
    );
};

const styles = StyleSheet.create({
    textInputBox: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 12,
        width: "72%",
        height: "45%",
        backgroundColor: "#FFF"
    },
    container: {
        backgroundColor: '#D76529',
        flex: 1
    },
    appName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F0F0',
        letterSpacing: 1,
    }
    
})