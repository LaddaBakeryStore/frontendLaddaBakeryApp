import React from 'react'
import { 
  View,
  Text,
  Button,
  StyleSheet 
} from 'react-native'

export default function HomeScreen( {navigation} ){
    return (
      <View>
        <View style={ {flex: 0.5} }>
          <Text>Home Screen</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
})