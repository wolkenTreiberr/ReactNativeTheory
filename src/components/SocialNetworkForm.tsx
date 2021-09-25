import React from 'react';
import {View, Platform} from 'react-native';
import SocialNetworkButton from './SocialNetworkButton';
import SocialNetworkFormStyles from './SocialNetworkFormStyles';

class SocialNetworkButtonsForm extends React.Component {
  render() {
    return (
      <View style={SocialNetworkFormStyles.ViewContainer}>
        <SocialNetworkButton
          image={require('../../images/facebook-icon.png')}
        />
        <SocialNetworkButton
          image={require('../../images/googlePlus-icon.png')}
        />
        {Platform.OS === 'ios' && (
          <SocialNetworkButton image={require('../../images/apple-icon.png')} />
        )}
      </View>
    );
  }
}

export default SocialNetworkButtonsForm;
