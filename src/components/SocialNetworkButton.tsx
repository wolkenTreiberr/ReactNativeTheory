import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import SocialNetworkButtonStyles from './SocialNetworkButtonStyles';

interface ImageProps {
  image: () => void;
}
class SocialNetworkButton extends React.Component<ImageProps, {}> {
  render() {
    return (
      <TouchableOpacity style={SocialNetworkButtonStyles.touchableOpacity}>
        <Image
          style={SocialNetworkButtonStyles.icon}
          source={this.props.image}
        />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
