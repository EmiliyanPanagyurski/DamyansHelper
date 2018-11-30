import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

const Thumbnail = ({artist, title, thumbnail_image, goToDetails, index}) => (
  <TouchableHighlight onPress={() => goToDetails(index)}>
    <View>
      <Text>{title}</Text>
      <Image style={{width: 50, height: 50}} source={{uri: thumbnail_image}} />
      <Text>{artist}</Text>
    </View>
  </TouchableHighlight>
)

export default Thumbnail;