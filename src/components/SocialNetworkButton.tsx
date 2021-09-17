import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
interface ImageProps {
  image: () => void;
}
class SocialNetworkButton extends React.Component<ImageProps, {}> {
  render() {
    return (
      <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image style={styles.image} source={this.props.image} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 45,
    height: 45,
    backgroundColor: 'rgb(255, 103, 97)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },
  image: {
    width: 30,
    height: 30,
  },
});
export default SocialNetworkButton;
