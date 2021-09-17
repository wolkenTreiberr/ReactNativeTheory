import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import TextButton from './TextButton';

interface Header {
  title?: string;
  isInEditMode?: boolean;
  onPress?(): void;
}

class Header extends React.Component<Header, {}> {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>

        <TextButton
          title={this.props.isInEditMode ? '' : 'Edit'}
          onPress={this.props.onPress}
          color="white"
          textButtonStyle={styles.editButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 33,
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 0.5,
    top: 10,
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  editButton: {
    top: 10,
    left: 10,
    flex: 0.1,
  },
});

export default Header;
