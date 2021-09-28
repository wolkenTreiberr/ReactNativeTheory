import React from 'react';
import {View, Platform} from 'react-native';
import SocialNetworkButton from './SocialNetworkButton';
import SocialNetworkFormstyles from './SocialNetworkFormstyles';

class SocialNetworkButtonsForm extends React.Component {
  render() {
    return (
      <View style={SocialNetworkFormstyles.ViewContainer}>
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
