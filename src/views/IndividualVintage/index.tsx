import { } from '../Home/Components';
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  TouchableHighlight,
  Image
} from "react-native";
import { human } from "react-native-typography";
import * as Font from "expo-font";
import styles from './styles';
import { VintagePreview, VintageOptions } from "../Home/Components";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';


const IndividualView = () => {

  const data = { category: 'NBA', name: '1986 Star Court King #18 Michael Jordan', detailedName: 'RC Rookie Bulls HOF PSA 9 MINT POP 1', condition: 'GRADED', year: 1990, setNumber: '30' }
  const navigator = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle={"dark-content"} />
      </View>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 0.05, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
          <Text style={{ marginLeft: 5, fontSize: 40, fontWeight: 'bold', position: "absolute", top: -10 }} onPress={() => navigator.navigate('main')}>{'←'}</Text>
          <Text style={{ alignSelf: "center" }}>{data['name']}</Text>
          <Text style={{ marginTop: 2, alignSelf: "center", fontSize: 10, fontWeight: '400', color: 'grey' }}>{data['detailedName']}</Text>
        </View>
        <View style={{ height: 100, flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: 'lightgrey', justifyContent: 'space-evenly', marginTop: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ backgroundColor: 'green', width: 100, height: 80, borderBottomStartRadius: 3, borderTopStartRadius: 3, borderRightWidth: 0.5, borderRightColor: 'white' }}>
              <View style={{ marginVertical: 3 }}>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 13, marginLeft: 7, marginTop: 5 }}>Lowest Ask</Text>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, marginLeft: 7, }}>{'$'}300</Text>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 13, marginLeft: 7, }}>Grade: PSA 9</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{ width: 80, height: 80, backgroundColor: 'green', borderBottomEndRadius: 3, borderTopEndRadius: 3, borderLeftWidth: 0.5, borderLeftColor: 'white' }}>
              <View>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center', marginTop: 20 }}>BUY</Text>
                <Text style={{ color: 'lightgrey', fontSize: 10, fontWeight: '700', textAlign: 'center' }}>OR BID</Text>
              </View>
            </TouchableHighlight>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ backgroundColor: 'red', width: 100, height: 80, borderBottomStartRadius: 3, borderTopStartRadius: 3, borderRightWidth: 0.5, borderRightColor: 'white' }}>
              <View style={{ marginVertical: 3 }}>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 13, marginLeft: 7, marginTop: 5 }}>Highest Bid</Text>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, marginLeft: 7, }}>{'$'}700</Text>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 13, marginLeft: 7, }}>Grade: PSA 9</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{ width: 80, height: 80, backgroundColor: 'red', borderBottomEndRadius: 3, borderTopEndRadius: 3, borderLeftWidth: 0.5, borderLeftColor: 'white' }}>
              <View>
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 20, textAlign: 'center', marginTop: 20 }}>SELL</Text>
                <Text style={{ color: 'lightgrey', fontSize: 10, fontWeight: '700', textAlign: 'center' }}>OR ASK</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ height: 400, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
          <View style={{ flex: 1, height: 30, backgroundColor: '#fff', alignSelf: 'center' }}>
            <Image style={{ marginTop: 40, marginBottom: 20, alignSelf: 'center' }} source={require('../../../assets/icon.png')} />
            <Text style={{ marginBottom: 20, fontSize: 10, color: 'grey', textAlign: 'center' }}>CONDITION: {data['condition']}</Text>
            <Text style={{ marginBottom: 20, fontSize: 15, color: 'black' }}>Last Sale <Text style={{ fontSize: 20, fontWeight: '900' }}>{'$'}1,100</Text> <Text style={{ color: 'green' }}> {'+$'}100 (10%)</Text></Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )


}

export default IndividualView;
