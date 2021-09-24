import React, {useState, useCallback, useMemo} from 'react';
import {
  SectionList,
  StyleSheet,
  ImageSourcePropType,
  ListRenderItemInfo,
  Text,
} from 'react-native';

import produce from 'immer';
import BackgroundForm from '../components/BackgroundForm';
import Header from '../components/Header';
import PersonCell from '../components/PersonCell';
import SearchBar from '../components/SearchBar';

export interface Person {
  image?: ImageSourcePropType;
  _title: string;
  description: string;
  isAdded: boolean;
  id: string;
}

export interface AddPeopleItem {
  id: string;
  title: string;
  data: Person[];
}

function AddPeopleScreen() {
  const [filteredData, setFilteredData] = useState<AddPeopleItem[]>([]);

  const [people, setPeople] = useState<AddPeopleItem[]>([
    {
      id: '01',
      title: 'A',
      data: [
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Aaron',
          description: 'Description...',
          isAdded: true,
          id: '1',
        },
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Albert',
          description: 'Description...',
          isAdded: false,
          id: '2',
        },
      ],
    },
    {
      id: '02',
      title: 'B',
      data: [
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Bruno',
          description: 'Description...',
          isAdded: false,
          id: '3',
        },
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Brian',
          description: 'Description...',
          isAdded: false,
          id: '4',
        },
      ],
    },
    {
      id: '03',
      title: 'C',
      data: [
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Cindy',
          description: 'Description...',
          isAdded: false,
          id: '5',
        },
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Caesar',
          description: 'Description...',
          isAdded: true,
          id: '6',
        },
      ],
    },
    {
      id: '04',
      title: 'D',
      data: [
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Donny',
          description: 'Description...',
          isAdded: true,
          id: '7',
        },
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Dylan',
          description: 'Description...',
          isAdded: false,
          id: '8',
        },
        {
          image: require('../../images/avatar.jpg'),
          _title: 'Danis',
          description: 'Description...',
          isAdded: true,
          id: '9',
        },
      ],
    },
    {
      id: '05',
      title: 'W',
      data: [
        {
          image: require('../../images/avatar.jpg'),
          _title: 'William',
          description: 'Description...',
          isAdded: false,
          id: '10',
        },
      ],
    },
  ]);

  const [search, setSearch] = useState('');

  const toggleSelect = useCallback((id: string) => {
    setPeople(
      produce(draft => {
        draft.map(item => {
          return item.data.find(subItem => {
            if (subItem.id === id) {
              subItem.isAdded = !subItem.isAdded;
            }
          });
        });
      }),
    );
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<AddPeopleItem>) => {
    return <PersonCell person={item} onPress={() => toggleSelect(item.id)} />;
  };

  useMemo(() => {
    return setFilteredData(
      people.reduce((FilterResult: AddPeopleItem[], sectionData) => {
        const textData = search.toUpperCase();
        const {id, title, data} = sectionData;

        const filteredPersons = data.filter(person => {
          const personData = person._title
            ? person._title.toUpperCase()
            : ''.toUpperCase();
          return personData.indexOf(textData) > -1;
        });

        if (filteredPersons.length !== 0) {
          FilterResult.push({
            id,
            title,
            data: filteredPersons,
          });
        }

        return FilterResult;
      }, []),
    );
  }, [search, people]);

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prepend={[
        <Header title="Add people" isEditable={false} />,
        <SearchBar
          value={search}
          placeholder={'Search people'}
          onChangeText={(text: string) => setSearch(text)}
        />,
      ]}>
      <SectionList
        sections={filteredData}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </BackgroundForm>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.96,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 21,
  },
  sectionHeader: {
    color: 'gray',
    fontSize: 20,
    marginLeft: 15,
  },
});

export default AddPeopleScreen;
