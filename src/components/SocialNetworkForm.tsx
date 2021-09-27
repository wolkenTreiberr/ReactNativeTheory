import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import SocialNetworkButton from './SocialNetworkButton';
class SocialNetworkForm extends React.Component {
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

export default SocialNetworkForm;
