import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'

class discountCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, image, sale, price } = this.props
    let Image_Http_URL = { uri: image };
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Image source={Image_Http_URL} resizeMode="contain" style={{ height: 128, width: 128 }} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>Flash sale {sale}%</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text style={styles.fontPrice}>Only {price} baht</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#707070',
    padding: 20,
    marginVertical: 2,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#fff",
  },
  fontPrice: {
    fontSize: 22,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: "#fff",
  }
});

export default discountCard;