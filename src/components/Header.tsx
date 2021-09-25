import React from 'react';
import {Text, View} from 'react-native';
import TextButton from './TextButton';
import HeaderStyles from './HeaderStyles';

interface Header {
  title?: string;
  isInEditMode?: boolean;
  onPress?(): void;
  isEditable?: boolean;
}

class Header extends React.Component<Header, {}> {
  render() {
    return (
      <View style={HeaderStyles.headerContainer}>
        <Text style={HeaderStyles.headerTitle}>{this.props.title}</Text>
        {this.props.isEditable ? (
          <TextButton
            title={this.props.isInEditMode ? '' : 'Edit'}
            onPress={this.props.onPress}
            color="white"
            textButtonStyle={HeaderStyles.editButton}
          />
        ) : null}
      </View>
    );
  }
}

export default Header;
