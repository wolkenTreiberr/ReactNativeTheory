import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import UserAvatarStyles from './UserAvatarStyles';

interface UserAvatarProps {
  avatarStyle?: object;
  avatarImage: object | string;
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
          style={UserAvatarStyles.imageBackground}
          source={this.props.avatarImage}
          imageStyle={UserAvatarStyles.image}>
          {this.props.isInEditMode && (
            <Entypo
              name="images"
              size={20}
              color="white"
              style={UserAvatarStyles.icon}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default UserAvatar;
