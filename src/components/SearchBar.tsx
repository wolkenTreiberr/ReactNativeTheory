import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

interface SearchBarProps {
  style?: object;
  placeholder: string;
  onChangetext: () => void;
  value?: string;
}

class SearchBar extends Component<SearchBarProps, {}> {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={styles.iconStyle}
          source={require('../../images/search-icon.png')}
        />
        <TextInput
          style={styles.textInputStyle}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangetext}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    margin: 20,
    top: 12,
  },
  textInputStyle: {
    height: 40,
    flex: 1,
    borderRightColor: 'grey',
    backgroundColor: 'white',
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});

export default SearchBar;
