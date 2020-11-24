import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity 
} from 'react-native'

class CustomHeader extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {title, isHome, navigation, routeName, isMenu, isLogin, isLoginPage, user} = this.props
        return (
            <View style={{flexDirection: 'row', height: 50, backgroundColor: "#D76529"}}>
                {
                    (isHome && isMenu) ? 
                        <View style={{flex: 1, justifyContent: 'center'}}>
                        {
                            (!isLogin) ?
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => navigation.navigate("LoginScreen")}>
                                <Image style={{width:30, height: 30, marginLeft: 5}} 
                                source={require("../assets/login.png")}
                                resizeMode="contain"
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => navigation.navigate("LoginScreen", {status: !isLogin})}>
                                <Image style={{width:30, height: 30, marginLeft: 5}} 
                                source={require("../assets/logout.png")}
                                resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                        </View>
                    :
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        {
                            (!isLoginPage) ?
                            <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate( routeName )} >
                                <Image style={{width:20, height: 20, marginLeft: 5}} 
                                    source={require("../assets/back.png")}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate( routeName, {status: isLogin} )} >
                                
                            </TouchableOpacity>
                        }
                    </View>
                    
                }
                
                <View style={{flex: 1.5, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 22, color: '#fff'}}>{title}</Text>
                </View>
                {
                    (isHome) ?
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate( "ProfileScreen", {user: user} )} >
                            <Image style={{width:30, height: 30, marginRight: 5}} 
                                source={require("../assets/profile.png")}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>

                    </View>   
                }
                     
            </View>
        )
    }
}

export default CustomHeader;