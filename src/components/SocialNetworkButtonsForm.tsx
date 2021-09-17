import React from 'react';
import SocialNetworkButton from './SocialNetworkButton';
import {View, StyleSheet, Platform} from 'react-native';

class SocialNetworkButtonsForm extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
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

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
});

export default SocialNetworkButtonsForm;
