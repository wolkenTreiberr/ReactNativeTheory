import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Person} from '../screens/AddPeopleScreen';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import PersonCellstyles from './PersonCellstyles';

interface PersonCellProps {
  person: Person;
  onPress: () => void;
}

class PersonCell extends Component<PersonCellProps, {}> {
  render() {
    return (
      <View style={PersonCellstyles.viewContainer}>
        <Image
          source={this.props.person.image}
          style={PersonCellstyles.containerImage}
        />
        <View style={PersonCellstyles.containerChecBox}>
          <Text style={PersonCellstyles.containerTitle}>
            {this.props.person.title}
          </Text>
          <Text style={PersonCellstyles.containerDescription}>
            {this.props.person.description}
          </Text>
        </View>
        <BouncyCheckbox
          size={25}
          fillColor="rgb(97, 20, 204)"
          unfillColor="#FFFFFF"
          isChecked={this.props.person.isAdded}
          iconStyle={PersonCellstyles.checkBoxIcon}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default PersonCell;
