import React, {Component} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {View, TextInput, Image} from 'react-native';
import SearchBarstyles from './SearchBarstyles';

interface SearchBarProps {
  style?: object;
  placeholder: string;
  onChangeText: (text: string) => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
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
          onChange={this.props.onChange}
        />
      </View>
    );
  }
}

export default SearchBar;
