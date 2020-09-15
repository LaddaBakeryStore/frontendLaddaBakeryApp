import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import CustomButton from "../../components/customButton"
import DiscountCard from '../../components/discountCard';
import { color } from 'react-native-reanimated';

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
  },{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72a",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baasda",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7222",
    title: "Third Item",
  },{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw333",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63s444",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d725555",
    title: "Third Item",
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
    const renderItem = ({item}) => (
      <DiscountCard title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
          <View style={styles.container}>
            <View>
              <SliderBox images={this.state.images}/>
            </View>
            <View style={{alignItems: 'center'}}>
              <View>
                <Text></Text>
              </View>
              <CustomButton title="Order Bread" style={styles.OrderButton} fontStyle={styles.fontOrderButton} navigation={navigation}/>
              <View>
                <Text></Text>
              </View>
            </View>
            <View style={styles.styleCategory}>
              <Text style={styles.fontCategory}>Category</Text>
            </View>
          </View>

          }
          ListFooterComponent={
            <View style={ {backgroundColor: "#D76529"} }>
              <Text></Text>
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
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#707070",
  },
  fontCategory: {
    color: "#D76529",
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