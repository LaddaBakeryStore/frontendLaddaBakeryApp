import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CustomHeader from '../../components/customHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import MenuCard from './menuCard'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
        title: "Fourth Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s",
        title: "Fifth Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72a",
        title: "Sixth Item",
    },
];

class MenuScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props
        const renderItem = ({ item }) => (
            <View style={{ flexDirection: "row" }}>
                <MenuCard title={item.title} />
                <MenuCard title={item.title} />
            </View>
        );

        return (
            <SafeAreaView>
                <LinearGradient colors={["#D76529", "#A26B4E", "#707070"]} >
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={
                            <CustomHeader title="Menu" navigation={navigation} routeName="Drawer" isMenu={true} />
                        }
                        ListFooterComponent={
                            <View style={{ backgroundColor: "#707070" }}>
                                <Text>{'\n'}</Text>
                            </View>
                        }
                    />
                </LinearGradient>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})

export default MenuScreen;