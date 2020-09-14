import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import CustomButton from "../../components/customButton"
import DiscountCard from '../../components/discountCard';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-dawd-145571e29d72',
    title: 'fourth Item',
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
    const { navigation } = this.props
    const renderItem = ({item}) => (
      <DiscountCard title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={ {flex: 2} }>
            <SliderBox images={this.state.images} sliderBoxHeight={250}/>
          </View>
          <View style={ {flex: 1.5} }>
            <CustomButton title="Order Bread" navigation={navigation} style={styles.OrderButton} fontStyle={styles.fontOrderButton} />
            <View style={styles.categoryStyle}>
              <Text style={styles.categoryFont}>Category</Text>
            </View>
          </View>
          <View style={ {flex: 3} }>
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
            <DiscountCard title="1" />
          </View>
          <View style={ {flex: 1, backgroundColor: "#D76529"} }>
            <Text>sdadwadawdawdaw</Text>
          </View>

        </ScrollView>
        
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  categoryStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5
  },
  categoryFont: {
    color: "#D76529",
    fontSize: 15,
    fontWeight: "bold",
  },
  OrderButton: {
    borderRadius: 50,
    backgroundColor: "#D76529",
    width: "85%",
    height: "70%",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#000",
    borderWidth: 1,
  },
  fontOrderButton: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default HomeScreen;  