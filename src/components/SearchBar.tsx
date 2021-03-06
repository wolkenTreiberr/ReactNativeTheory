import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import SearchBarstyles from './SearchBarstyles';

interface SearchBarProps {
  style?: object;
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: string;
}

class SearchBar extends Component<SearchBarProps, {}> {
  render() {
    return (
      <View style={SearchBarstyles.viewContainer}>
        <Image
          style={SearchBarstyles.containerIcon}
          source={require('../../images/search-icon.png')}
        />
        <TextInput
          style={SearchBarstyles.textInput}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default SearchBar;
