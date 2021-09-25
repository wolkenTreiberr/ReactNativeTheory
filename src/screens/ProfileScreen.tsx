import React from 'react';
import ProfileScreenStyle from './ProfileScreenStyles';
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

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  state = {
    name: 'UserName',
    email: 'UserEmail',
    followers: 23,
    following: 234,
    image: require('../../images/avatar.jpg'),
    isInEditMode: false,
  };

  editModeOn = () => {
    this.setState({isInEditMode: true});
  };

  editModeOff = () => {
    this.setState({isInEditMode: false});
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

  onChangeName = (value: string) => {
    this.setState({name: value});
  };

  onChangeEmail = (value: string) => {
    this.setState({email: value});
  };

  isEnableButton = () => {
    return this.state.name !== '' && this.state.email !== '';
  };

  render() {
    return (
      <BackgroundForm
        containerStyle={ProfileScreenStyle.viewContainer}
        prepend={[
          <Header
            title="My profile"
            isEditable={true}
            isInEditMode={this.state.isInEditMode}
            onPress={this.editModeOn}
          />,
        ]}>
        <UserAvatar
          avatarStyle={ProfileScreenStyle.avatar}
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
          onChangeText={this.onChangeName}
          editable={this.state.isInEditMode}
          inputStyle={ProfileScreenStyle.input}
          placeholder="Name"
        />
        <CredentialTextInput
          value={this.state.email}
          onChangeText={this.onChangeEmail}
          editable={this.state.isInEditMode}
          placeholder="Email"
        />
        {this.state.isInEditMode ? (
          <FilledButton
            filledButtonStyle={ProfileScreenStyle.filledButton}
            title="Update profile"
            onPress={() => this.editModeOff()}
            disabled={!this.isEnableButton()}
          />
        ) : (
          <FilledButton
            filledButtonStyle={ProfileScreenStyle.filledButton}
            title="Show state"
            onPress={() => console.log(this.state)}
          />
        )}
      </BackgroundForm>
    );
  }
}

export default ProfileScreen;
