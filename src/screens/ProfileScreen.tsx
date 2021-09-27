/* eslint-disable no-shadow */
import React, {useState} from 'react';
import ProfileScreenStyles from './ProfileScreenStyles';
import ImagePicker from 'react-native-image-crop-picker';
import UserAvatar from '../components/UserAvatar';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import FollowersBlock from '../components/FollowersBlock';
import Header from '../components/Header';
import useEmail from '../hooks/useEmail';
import useName from '../hooks/useName';

interface ProfileScreenState {
  followers: number;
  following: number;
  isInEditMode: boolean;
}

const initialState = {
  followers: 23,
  following: 234,
  isInEditMode: false,
};

const ProfileScreen = () => {
  const [state, setState] = useState<ProfileScreenState>(initialState);
  const {name, nameError, setName} = useName('userName');
  const {email, emailError, setEmail} = useEmail('userEmail@mail.com');
  const [avatar, setAvatar] = useState<string>(
    require('../../images/avatar.jpg'),
  );
  const {followers, following, isInEditMode} = state;

  const editModeOn = () => {
    setState(currentState => ({
      ...currentState,
      isInEditMode: true,
    }));
  };

  const editModeOff = () => {
    setState(currentState => ({
      ...currentState,
      isInEditMode: false,
    }));
  };

  const chooseAvatarFromLibrary = (avatar: string, setAvatar: Function) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      const imageUri = img.path;

      let image: any = avatar;
      image = imageUri;

      setAvatar(image);
    });
  };

  const onChangeName = (newName: string) => {
    setName(newName);
  };

  const onChangeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const isEnableButton = () => {
    return (
      name !== '' && email !== '' && nameError === null && emailError === null
    );
  };

  return (
    <BackgroundForm
      containerStyle={ProfileScreenStyles.viewContainer}
      prepend={[
        <Header
          title="My profile"
          isEditable={true}
          isInEditMode={isInEditMode}
          onPress={editModeOn}
        />,
      ]}>
      <UserAvatar
        avatarStyle={ProfileScreenStyles.avatar}
        onPress={() => chooseAvatarFromLibrary(avatar, setAvatar)}
        avatarImage={avatar}
        isInEditMode={isInEditMode}
        disabled={!isInEditMode}
      />

      {!isInEditMode && (
        <FollowersBlock followers={followers} following={following} />
      )}

      <CredentialTextInput
        value={name}
        onChangeText={onChangeName}
        editable={isInEditMode}
        inputStyle={ProfileScreenStyles.input}
        placeholder="Name"
        errorMessage={nameError}
      />
      <CredentialTextInput
        value={email}
        onChangeText={onChangeEmail}
        editable={isInEditMode}
        placeholder="Email"
        errorMessage={emailError}
      />
      {isInEditMode ? (
        <FilledButton
          filledButtonStyle={ProfileScreenStyles.filledButton}
          title="Update profile"
          onPress={editModeOff}
          disabled={!isEnableButton()}
        />
      ) : (
        <FilledButton
          filledButtonStyle={ProfileScreenStyles.filledButton}
          title="Show state"
          onPress={() => console.log(state)}
        />
      )}
    </BackgroundForm>
  );
};

export default ProfileScreen;
