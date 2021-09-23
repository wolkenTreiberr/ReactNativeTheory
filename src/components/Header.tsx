import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import TextButton from './TextButton';
interface Header {
  title?: string;
  isInEditMode?: boolean;
  onPress?(): void;
  isEditable?: boolean;
}
class Header extends React.Component<Header, {}> {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text
          style={{
            ...styles.headerTitle,
            right: this.props.isEditable ? 0 : 13,
          }}>
          {this.props.title}
        </Text>
        {this.props.isEditable ? (
          <TextButton
            title={this.props.isInEditMode ? '' : 'Edit'}
            onPress={this.props.onPress}
            color="white"
            textButtonStyle={styles.editButton}
          />
        ) : (
          <TextButton title={''} color="white" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 33,
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 0.5,
    top: 10,
    paddingLeft: '25%',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  editButton: {
    top: 10,
    left: 60,
    flex: 0.1,
  },
});

export default Header;
