import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

class discountCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { title } = this.props
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default discountCard;