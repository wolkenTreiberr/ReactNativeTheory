import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Queue} from 'react-native-spacing-system';
import ImageCellFooterstyles from './ImageCellFooterstyles';

interface ImageCellFooterProps {
  likes?: number;
  liked?: boolean;
  onPress: () => void;
}

const ImageCellFooter = (props: ImageCellFooterProps) => {
  return (
    <View style={ImageCellFooterstyles.footerContainer}>
      <Queue size={25} />
      <TouchableOpacity
        style={ImageCellFooterstyles.likeButtonTouchableOpacity}
        onPress={props.onPress}>
        <Image
          source={require('../../images/likes.png')}
          style={
            props.liked
              ? ImageCellFooterstyles.likeButton
              : ImageCellFooterstyles.unlikeButton
          }
        />
      </TouchableOpacity>
      <Queue size={15} />
      <Text style={ImageCellFooterstyles.likesCounter}>{props.likes}</Text>
    </View>
  );
};

export default ImageCellFooter;
