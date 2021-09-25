import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Person} from '../screens/AddPeopleScreen';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import PersonCellStyles from './PersonCellStyles';

interface PersonCellProps {
  person: Person;
  onPress: () => void;
}

class PersonCell extends Component<PersonCellProps, {}> {
  render() {
    return (
      <View style={PersonCellStyles.viewContainer}>
        <Image
          source={this.props.person.image}
          style={PersonCellStyles.containerImage}
        />
        <View style={PersonCellStyles.containerChecBox}>
          <Text style={PersonCellStyles.containerTitle}>
            {this.props.person._title}
          </Text>
          <Text style={PersonCellStyles.containerDescription}>
            {this.props.person.description}
          </Text>
        </View>
        <BouncyCheckbox
          size={25}
          fillColor="rgb(97, 20, 204)"
          unfillColor="#FFFFFF"
          isChecked={this.props.person.isAdded}
          iconStyle={PersonCellStyles.checkBoxIcon}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default PersonCell;
