import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default class shoppingCartCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { navigation, title, price, image} = this.props
    let Image_Http_URL = { uri: image };
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Image source={Image_Http_URL}
            style={styles.imageSytle}
          />
        </View>
        <View style={{ flex: 1.5, flexDirection: 'column' }}>
          <View style={{ flex: 1}}>
          <Text style={styles.fontBreadName}>{title}</Text>

          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          </View>
        </View>
        <View style={{ flex: 0.8, flexDirection: 'row-reverse', }}>
          <Text style={styles.fontPrice}>{price} baht</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#707070',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  fontBreadName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 3,
    marginLeft: 9,
  },
  imageSytle: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
  fontPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end',
    marginRight: 7,
    marginBottom: 3,
  },
  deleteButton: {
    width: 25,
    height: 25,
    marginVertical: -8,
    marginHorizontal: -8,
  }
});