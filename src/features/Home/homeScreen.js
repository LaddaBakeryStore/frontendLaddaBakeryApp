import React, { Component } from 'react'
import { 
  View,
  Text,
  Button,
  StyleSheet 
} from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import CustomButton from "../../components/customBottom"

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
    return (
      <View style={styles.container}>
        <View style={ {flex: 2} }>
          <SliderBox images={this.state.images} sliderBoxHeight={250}/>
        </View>
        <View style={ {flex: 1.5} }>
          <CustomButton title="Order Bread" navigation={navigation} />
          <View style={ {flex: 0.1, backgroundColor: "#707070"} } />
          <View style={styles.categoryStyle}>
            <Text style={styles.categoryFont}>Category</Text>
          </View>
          <View style={ {flex: 0.1, backgroundColor: "#707070"} } />
        </View>
        <View style={ {flex: 3} }>

        </View>
      </View>
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
  }
})

export default HomeScreen;  