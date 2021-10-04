import React from 'react';
import {Image, View} from 'react-native';
import {Inset} from 'react-native-spacing-system';
import ImageCellFooter, {ImageCellFooterProps} from './ImageCellFooter';
import ImageCellHeader, {ImageCellHeaderProps} from './ImageCellHeader';
import ImageCellstyles from './ImageCellstyles';

export type ImageCellProps = {
  imageUrl?: string;
  headerProps: ImageCellHeaderProps;
  footerProps: ImageCellFooterProps;
};

const ImageCell: React.FC<ImageCellProps> = (props: ImageCellProps) => {
  return (
    <View>
      <Inset horizontal={20}>
        <ImageCellHeader {...props.headerProps} />
      </Inset>
      <Image
        style={ImageCellstyles.image}
        resizeMode={'contain'}
        source={{uri: props.imageUrl}}
      />
      <Inset horizontal={5}>
        <ImageCellFooter {...props.footerProps} />
      </Inset>
    </View>
  );
};

export default ImageCell;
