import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import SocialNetworkButtonstyles from './SocialNetworkButtonstyles';

interface ImageProps {
  image: () => void;
}
class SocialNetworkButton extends React.Component<ImageProps, {}> {
  render() {
    return (
      <TouchableOpacity style={SocialNetworkButtonstyles.touchableOpacity}>
        <Image
          style={SocialNetworkButtonstyles.icon}
          source={this.props.image}
        />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
