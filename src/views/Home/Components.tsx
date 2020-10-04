import React from "react";
import {
  Text,


  View,

  Image
} from "react-native";

import styles from "./styles";

import Navigation from '../Root/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const VintagePreview = (props: { uri: any; name: string; typeOffer: string; offer: any; bidTime: any; }, ) => {

  return (

  <View
    style={{
      height: 250,
      width: 150,
      marginHorizontal: 10,
      flex: 1,
      borderWidth: 5,
      borderColor: '#f2f2f2'
    }}>
    <View
      style={{
        flex: 2,
        maxWidth: 140,
        maxHeight: 140,
        backgroundColor: '#fff',
      }}
    >
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          flex: 1,
          resizeMode: "cover",
        }}
      ></Image>
    </View>
    <View style={{
      flex: 1,
      backgroundColor: '#f2f2f2'
    }}
    >
      <Text style={{ marginTop: 5, marginBottom: 8, color: 'black', fontSize: 12, fontWeight: '500', overflow: 'hidden', }}>{props.name}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 12 }}>{props.typeOffer}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 24, fontWeight: 'bold' }}>{'$'}{props.offer}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 12 }}>{props.bidTime} minutes ago</Text>

    </View>
  </View>
  )
};

const VintageOptions = (props: {
  type: React.ReactNode;
}) => {
  return <View style={{
    marginBottom: 10,
    marginTop: 10
  }}>
      <View style={{
      flex: 1,
      flexDirection: "row",
      paddingLeft: 15
    }}>
        <Text style={{
        fontSize: 20
      }}>
          {props.type}
        </Text>
        <Text style={styles.seeAll}>See All {">"}</Text>
      </View>
    </View>;
};

export {VintagePreview, VintageOptions};
