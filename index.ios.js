//import library to help create component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View>
    <Header headerTitle={'Albums'} />
    <AlbumList />
  </View>

);


//render component to device
AppRegistry.registerComponent('albums', () => App);

