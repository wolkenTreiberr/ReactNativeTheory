import React, {useState, useCallback, useMemo} from 'react';
import {
  SectionList,
  ImageSourcePropType,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import AddPeopleScreenstyles from './AddPeopleScreenstyles';
import BackgroundForm from '../components/BackgroundForm';
import Header from '../components/Header';
import PersonCell from '../components/PersonCell';
import SearchBar from '../components/SearchBar';

export interface Person {
  image?: ImageSourcePropType;
  title: string;
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
          title: 'Aaron',
          description: 'Description...',
          isAdded: true,
          id: '1',
        },
        {
          image: require('../../images/avatar.jpg'),
          title: 'Albert',
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
          title: 'Bruno',
          description: 'Description...',
          isAdded: false,
          id: '3',
        },
        {
          image: require('../../images/avatar.jpg'),
          title: 'Brian',
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
          title: 'Cindy',
          description: 'Description...',
          isAdded: false,
          id: '5',
        },
        {
          image: require('../../images/avatar.jpg'),
          title: 'Caesar',
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
          title: 'Donny',
          description: 'Description...',
          isAdded: true,
          id: '7',
        },
        {
          image: require('../../images/avatar.jpg'),
          title: 'Dylan',
          description: 'Description...',
          isAdded: false,
          id: '8',
        },
        {
          image: require('../../images/avatar.jpg'),
          title: 'Danis',
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
          title: 'William',
          description: 'Description...',
          isAdded: false,
          id: '10',
        },
      ],
    },
  ]);

  const [search, setSearch] = useState('');

  const toggleSelect = useCallback(
    (id: string) => {
      setPeople(
        people.filter(person => {
          const personData = person.data;
          const selectedPerson = personData.filter(item => {
            if (item.id === id) {
              item.isAdded = !item.isAdded;
            }
            return item;
          });
          return selectedPerson;
        }),
      );
    },
    [people],
  );

  const renderItem = ({item}: ListRenderItemInfo<Person>) => {
    return <PersonCell person={item} onPress={() => toggleSelect(item.id)} />;
  };

  useMemo(() => {
    return setFilteredData(
      people.reduce((filterResult: AddPeopleItem[], sectionData) => {
        const textData = search.toUpperCase();
        const {id, title, data} = sectionData;

        const filteredPersons = data.filter(person => {
          const personData = person.title
            ? person.title.toUpperCase()
            : ''.toUpperCase();
          return personData.indexOf(textData) > -1;
        });

        if (filteredPersons.length !== 0) {
          filterResult.push({
            id,
            title,
            data: filteredPersons,
          });
        }

        return filterResult;
      }, []),
    );
  }, [search, people]);

  const childrenKeys = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <BackgroundForm
      containerStyle={AddPeopleScreenstyles.sectionView}
      prependedChildren={[
        <Header title="Add people" isEditable={false} key={childrenKeys()} />,
        <SearchBar
          value={search}
          placeholder={'Search people'}
          onChangeText={(text: string) => setSearch(text)}
        />,
      ]}>
      <SectionList
        sections={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={AddPeopleScreenstyles.sectionHeader}>{title}</Text>
        )}
      />
    </BackgroundForm>
  );
}

export default AddPeopleScreen;
