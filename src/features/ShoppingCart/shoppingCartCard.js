import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import ShoppingButton from './shoppingButton';

const windowWidth = Dimensions.get('window').width;

export default class shoppingCartCard extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: "https://s.isanook.com/wo/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzMvMTY1NTgxL2ZmLmpwZw==.jpg" }}
            style={styles.imageSytle}
          />
        </View>
        <View style={{ flex: 1.5, flexDirection: 'column' }}>
          <View style={{ flex: 1}}>
          <Text style={styles.fontBreadName}>Bread name</Text>

          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>
            <ShoppingButton />
          </View>
        </View>
        <View style={{ flex: 0.8, flexDirection: 'row-reverse', }}>
          <View>
            <TouchableOpacity>
              <Image source={require("../../assets/delete.png")} style={styles.deleteButton}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.fontPrice}>20 baht</Text>
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