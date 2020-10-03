import React, { useState, useEffect }from 'react';
import { Text, SafeAreaView, ScrollView, View, StatusBar, Image, FlatList} from 'react-native';
import { human } from 'react-native-typography'
import styles from './styles';


// export default () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

const Home = () => {

    const [vintage, setVintage] = useState([
      { type: 'MLB', key: '1'},
      { type: 'NBA', key: '2'},
      { type: 'NFL', key: '3'},
      { type: 'Pokemon', key: '4'},
    ])


    return (
    <SafeAreaView style={styles.container}>
      <View><StatusBar barStyle={'dark-content'}/></View>
      <View style={styles.homeImage}>
        <Text style={human.largeTitle}>World Wide Vintage</Text>
      </View>
      <ScrollView horizontal={true}>
        {
          vintage.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.types}>{item.type}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
