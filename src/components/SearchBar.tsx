import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import SearchBarStyles from './SearchBarStyles';

interface SearchBarProps {
  style?: object;
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
}

class SearchBar extends Component<SearchBarProps, {}> {
  render() {
    return (
      <View style={SearchBarStyles.viewContainer}>
        <Image
          style={SearchBarStyles.containerIcon}
          source={require('../../images/search-icon.png')}
        />
        <TextInput
          style={SearchBarStyles.textInput}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default SearchBar;
