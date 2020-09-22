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
        const {title, isHome, navigation, routeName, isMenu} = this.props

        return (
            <View style={{flexDirection: 'row', height: 50}}>
                {
                    (isHome && isMenu)? 
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => navigation.openDrawer()}>
                        <Image style={{width:30, height: 30, marginLeft: 5}} 
                            source={require("../assets/menu.png")}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate( routeName )} >
                        <Image style={{width:20, height: 20, marginLeft: 5}} 
                            source={require("../assets/back.png")}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
                
                <View style={{flex: 1.5, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>{title}</Text>
                </View>
                {
                    (isHome || isMenu)?
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}} onPress={() => navigation.navigate('ShoppingCartScreen')}>
                        <Image style={{width:40, height: 40, marginRight: 5}} 
                            source={require("../assets/take-away.png")}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    :
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                       
                    </View>
                }
                
            </View>
        )
    }
}

export default CustomHeader;