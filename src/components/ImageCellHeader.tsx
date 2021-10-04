import React from 'react';
import {Image, Text, View} from 'react-native';
import {Queue} from 'react-native-spacing-system';
import ImageCellHeaderstyles from './ImageCellHeaderstyles';

export type ImageCellHeaderProps = {
  profileUrl?: string;
  authorName?: string;
};

const ImageCellHeader: React.FC<ImageCellHeaderProps> = (
  props: ImageCellHeaderProps,
) => {
  return (
    <View style={ImageCellHeaderstyles.headerContainer}>
      <Image
        style={ImageCellHeaderstyles.profileImage}
        source={
          props.profileUrl
            ? {uri: props.profileUrl}
            : require('../../images/girl.png')
        }
      />
      <Queue size={10} />
      <Text style={ImageCellHeaderstyles.nameText}>
        {props.authorName ?? 'Incognito'}
      </Text>
    </View>
  );
};

export default ImageCellHeader;
