import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {AddPeopleItem} from '../screens/AddPeopleScreen';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface PersonCellProps {
  person: AddPeopleItem;
  onPress: () => void;
}

class PersonCell extends Component<PersonCellProps, {}> {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Image source={this.props.person.image} style={styles.imageStyle} />
        <View style={styles.checBoxStyle}>
          <Text style={styles.titleStyle}>{this.props.person._title}</Text>
          <Text style={styles.descriptionStyle}>
            {this.props.person.description}
          </Text>
        </View>
        <BouncyCheckbox
          size={25}
          fillColor="rgb(97, 20, 204)"
          unfillColor="#FFFFFF"
          isChecked={this.props.person.isAdded}
          iconStyle={{borderColor: 'rgb(97, 20, 204)', marginLeft: 'auto'}}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 67,
    paddingLeft: 35,
    paddingRight: 20,
    alignItems: 'center',
  },
  imageStyle: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  titleStyle: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: '700',
  },
  descriptionStyle: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },
  checBoxStyle: {
    marginRight: 'auto',
  },
});

export default PersonCell;
