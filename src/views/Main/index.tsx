import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';
import CardCollection from '../CardCollection';
import Home from '../Home';

export default () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#554BC5' },
    { key: 'collection', title: 'Collection', icon: 'album', color: '#E2125B' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    collection: CardCollection,
  });

  return (
    <RootSiblingParent>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
      />
    </RootSiblingParent>
  );
}
