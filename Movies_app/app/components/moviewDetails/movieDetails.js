import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieDetails = ({title, artist, image, url, thumbnail_image}) => (
  <View>
    <Text>{title}</Text>
    <Text>{artist}</Text>
    <Text>{url}</Text>
    <Image style={{width: 50, height: 50}} source={{uri: image}} />
    <Image style={{width: 50, height: 50}} source={{uri: thumbnail_image}} />
  </View>
)

export default MovieDetails;