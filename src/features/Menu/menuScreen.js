import React, { Component } from 'react'
import {View, Text} from 'react-native'
import CustomHeader from '../../components/customHeader'

class MenuScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <CustomHeader title="Menu" navigation={navigation} routeName="Drawer" isMenu={true}/>
                <Text>Menu screen</Text>
            </View>
        )
    }
}

export default MenuScreen;