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
import LinearGradient from 'react-native-linear-gradient'

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
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baasda",
    title: "Seventh Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Eighth Item",
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
      ]
    };
  }
  render() {
    const { navigation, routeName } = this.props
    const renderItem = ({ item }) => (
      <DiscountCard title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={["#D76529", "#E97314", "#FA8100"]}>
          <CustomHeader title="Home" isHome={true} navigation={navigation} isMenu={true} />
        </LinearGradient>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <LinearGradient colors={["#D76529", "#E97314", "#FA8100"]}>
              <View style={styles.container}>
                <View>
                  <SliderBox images={this.state.images} />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <View>
                    <Text></Text>
                  </View>
                  <CustomButton title="Order Bread" style={styles.OrderButton} fontStyle={styles.fontOrderButton} navigation={navigation} routeName='MenuScreen' />
                  <View>
                    <Text></Text>
                  </View>
                </View>
                <View style={styles.styleCategory}>
                  <Text style={styles.fontCategory}>Category</Text>
                </View>
              </View>
            </LinearGradient>
          }
          ListFooterComponent={
            <LinearGradient colors={["#D76529", "#E97314", "#FA8100"]} style={{ backgroundColor: "#D76529" }}>
              <Text>{'\n'}</Text>
            </LinearGradient>
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