import React from 'react';

import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface UserAvatarProps {
  avatarStyle?: object;
  avatarImg: object;
  disabled: boolean;
  isInEditMode: boolean;
  onPress(): void;
}

class UserAvatar extends React.Component<UserAvatarProps, {}> {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        style={this.props.avatarStyle}>
        <ImageBackground
          style={styles.imageBackgroud}
          source={this.props.avatarImg}
          imageStyle={{borderRadius: 15}}>
          {this.props.isInEditMode && (
            <Entypo
              name="images"
              size={20}
              color="white"
              style={styles.iconStyle}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroud: {
    width: 90,
    height: 90,
    right: -5,
    top: -5,
  },
  iconStyle: {
    position: 'absolute',
    opacity: 1,
    overflow: 'hidden',
  },
});

export default UserAvatar;
