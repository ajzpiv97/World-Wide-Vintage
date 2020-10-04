import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { showToast } from '../../utils';
import { Searchbar } from 'react-native-paper';
import styles from './styles';

const cards: Array<any> = [
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
  {
    imageUrl: '',
    title: 'Alex Rodriguez',
    subTitle: 'Special Edition',
    priceType: 'bid',
    price: '$500'
  },
  {
    imageUrl: '',
    title: 'Pikachu FG',
    priceType: 'Ask',
    price: '$1500'
  },
]

export default () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar
          style={{ width: '90%' }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.section}>
        {
          cards.map(({ imageUrl, title, subTitle, priceType, price }, index) => (
            <TouchableOpacity key={index} style={styles.card} activeOpacity={0.5} onPress={() => showToast('Selected Card')}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.20, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={{ resizeMode: "cover", backgroundColor: '#fff', width: '85%', height: '85%' }}
                  />
                </View>
                <View style={{ flex: 0.50, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
                  <>
                    {
                      subTitle ? <Text style={{ fontStyle: 'italic' }}>{subTitle}</Text> : null
                    }
                  </>
                </View>
                <View style={{ flex: 0.30, justifyContent: 'center', alignItems: 'center' }}>
                  <View>
                    <Text style={{ fontStyle: 'italic', fontSize: 10 }}>Lowest {priceType}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}
