/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import UserAvatar from '../components/UserAvatar';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import FollowersBlock from '../components/FollowersBlock';
import Header from '../components/Header';

interface ProfileScreenState {
  name: string;
  email: string;
  followers: number;
  following: number;
  image: object;
  isInEditMode: boolean;
}

class ProfileScreen extends React.Component<ProfileScreenState, {}> {
  state = {
    name: 'User name',
    email: 'User email',
    followers: 23,
    following: 234,
    image: require('../../images/avatar.jpg'),
    isInEditMode: false,
    isKeyboardShown: false,
  };

  editModeOn = () => {
    this.setState({isInEditMode: true});
  };

  editModeOff = () => {
    this.setState({isInEditMode: false});
  };

  keyboardShow = () => {
    this.setState({isKeyboardShown: true});
  };

  chooseAvatarFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      const imageUri = img.path;

      let image: any = {...this.state.image};
      image.uri = imageUri;

      this.setState({image});
    });
  };

  isEnableButton = () => {
    return this.state.name !== '' && this.state.email !== '';
  };

  render() {
    return (
      <BackgroundForm
        viewStyle={{
          ...styles.viewStyle,
          paddingTop: this.state.isInEditMode ? 75 : 60,
        }}
        prepend={
          <Header
            title="My profile"
            isEditable={true}
            isInEditMode={this.state.isInEditMode}
            onPress={this.editModeOn}
          />
        }>
        <UserAvatar
          avatarStyle={styles.avatarStyle}
          onPress={this.chooseAvatarFromLibrary}
          avatarImage={this.state.image}
          isInEditMode={this.state.isInEditMode}
          disabled={!this.state.isInEditMode}
        />

        {!this.state.isInEditMode && (
          <FollowersBlock
            followers={this.state.followers}
            following={this.state.following}
          />
        )}

        <CredentialTextInput
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          editable={this.state.isInEditMode}
          onFocus={this.keyboardShow}
          inputStyle={styles.inputStyle}
          placeholder="Name"
        />
        <CredentialTextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          editable={this.state.isInEditMode}
          onFocus={this.keyboardShow}
          placeholder="Email"
        />
        {this.state.isInEditMode ? (
          <FilledButton
            filledButtonStyle={{
              marginTop: this.state.isKeyboardShown ? 100 : '97%',
            }}
            title="Update profile"
            onPress={() => this.editModeOff()}
            disabled={this.isEnableButton() ? false : true}
          />
        ) : (
          <FilledButton
            filledButtonStyle={styles.filledButtonStyle}
            title="Show state"
            onPress={() => console.log(this.state)}
          />
        )}
      </BackgroundForm>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.9,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  filledButtonStyle: {
    marginTop: 240,
  },
  avatarStyle: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    top: -35,
    left: 20,
  },
  inputStyle: {
    marginBottom: 15,
  },
});

export default ProfileScreen;
