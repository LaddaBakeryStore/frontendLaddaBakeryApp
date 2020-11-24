import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import CustomButton from "../../components/customButton"
import DiscountCard from './discountCard'
import CustomHeader from '../../components/customHeader'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sandwich bread (Banana Bread Recipe)",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/331.jpg",
    sale: 10,
    price: 40,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Raisin Bread",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/312.jpg",
    sale: 10,
    price: 10,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Butter Toast",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/301.jpg",
    sale: 15,
    price: 30,
  }, {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
    title: "Sugar Butter Toast",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/29.jpg",
    sale: 10,
    price: 40,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s",
    title: "Rainbow Stretch Cheese Bread",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/w20.jpg",
    sale: 20,
    price: 35,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72a",
    title: "Caramel Biscuits",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/271.jpg",
    sale: 15,
    price: 40,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baasda",
    title: "Pork Chop Bun",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/163.jpg",
    sale: 20,
    price: 20,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Chicken Buns",
    image: "http://www.thaismescenter.com/wp-content/uploads/2018/10/242.jpg",
    sale: 10,
    price: 25,
  },
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://mpics.mgronline.com/pics/Images/562000012456502.JPEG",
        "https://img.wongnai.com/p/1920x0/2020/02/09/b1016905f7064d559bf02b7cc1530a24.jpg",
        "https://s.isanook.com/wo/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzMvMTY1NTgxL2ZmLmpwZw==.jpg",
        "https://kcgcorporation.com/wp-content/uploads/2009/12/Loaf-Bread-.jpg"
      ],
    };
  }
  render() {
    const { navigation, routeName, route} = this.props
    const renderItem = ({ item }) => (
      <DiscountCard title={item.title} image={item.image} sale={item.sale} price={item.price} />
    );
    return (
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: "#D76529"}}>
          <CustomHeader title="Home" isHome={true} navigation={navigation} isMenu={true} isLogin={route.params.status} user={route.params.person}/>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View>
              <View style={styles.container}>
                <View>
                  <SliderBox images={this.state.images} />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View>
                    <Text></Text>
                  </View>
                  <CustomButton title="Order Bread" style={styles.OrderButton} fontStyle={styles.fontOrderButton} navigation={navigation} routeName='MenuScreen' user={route.params.person}/>
                  <View>
                    <Text></Text>
                  </View>
                </View>
                <View style={styles.styleCategory}>
                  <Text style={styles.fontCategory}>Category</Text>
                </View>
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={{ backgroundColor: "#D76529" }}>
              <Text>{'\n'}</Text>
            </View>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  styleCategory: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#707070",
  },
  fontCategory: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  OrderButton: {
    borderRadius: 50,
    backgroundColor: "#D76529",
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: "90%",
  },
  fontOrderButton: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default HomeScreen;  