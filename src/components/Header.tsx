import React from 'react';
import {Text, View} from 'react-native';
import TextButton from './TextButton';
import Headerstyles from './Headerstyles';

interface Header {
  title?: string;
  isInEditMode?: boolean;
  onPress?(): void;
  isEditable?: boolean;
}

class Header extends React.Component<any, Header> {
  render() {
    return (
      <View style={Headerstyles.headerContainer}>
        <Text style={Headerstyles.headerTitle}>{this.props.title}</Text>
        {this.props.isEditable ? (
          <TextButton
            title={this.props.isInEditMode ? '' : 'Edit'}
            onPress={this.props.onPress}
            color="white"
            textButtonStyle={Headerstyles.editButton}
          />
        ) : null}
      </View>
    );
  }
}

export default Header;
