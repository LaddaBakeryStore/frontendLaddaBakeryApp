import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CustomHeader from '../../components/customHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import MenuCard from './menuCard'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
        title: "Sugar Crumbs",
        image: "https://img.kapook.com/u/2018/surauch/cooking/co1/t2_4.jpg",
        price: 15,
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Sandwich bread (Banana Bread Recipe)",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/331.jpg",
        price: 40,
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Raisin Bread",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/312.jpg",
        price: 10,
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Butter Toast",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/301.jpg",
        price: 30,
      }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
        title: "Sugar Butter Toast",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/29.jpg",
        price: 40,
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s",
        title: "Rainbow Stretch Cheese Bread",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/w20.jpg",
        price: 35,
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72a",
        title: "Caramel Biscuits",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/271.jpg",
        price: 40,
      },
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baasda",
        title: "Pork Chop Bun",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/163.jpg",
        price: 20,
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
        title: "Chicken Buns",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/242.jpg",
        price: 10,
      },
      {
        id: "sdw",
        title: "Sausage Bread",
        image: "https://เมนู.net/media/images/recipe/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%81.jpg",
        price: 10
      },
      {
        id: "1was5d",
        title: "Custard Bread",
        image: "https://do.lnwfile.com/ip1fri.jpg",
        price: 10
      },
      {
        id: "12was5d",
        title: "Flossy pork buns",
        image: "https://cf.shopee.co.th/file/5baa892a3d33ccd4409ad46b8a5f9df7",
        price: 10
      },
      {
        id: "1w3as5d",
        title: "Red Pork Bun",
        image: "https://f.ptcdn.info/707/053/000/owiv6nijuU4397avXIc-o.jpg",
        price: 10
      },
      {
        id: "1wa4s5d",
        title: "Flossy pork buns",
        image: "https://cf.shopee.co.th/file/5baa892a3d33ccd4409ad46b8a5f9df7",
        price: 10
      },
      {
        id: "1was55d",
        title: "Crab Stick Cream Cheese Toast",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/232.jpg",
        price: 20
      },
      {
        id: "1was56d",
        title: "Brown Butter Biscuits, Chili Paste Chicken Floss",
        image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/212.jpg",
        price: 30
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
                <MenuCard title={item.title} image={item.image} price={item.price} navigation={navigation} />
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
                            <CustomHeader title="Menu" navigation={navigation} routeName="HomeScreen" isMenu={true} />
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