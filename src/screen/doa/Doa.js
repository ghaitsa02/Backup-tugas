import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Doa = ({route, navigation}) => {
  const [search, setSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [data, setData] = useState([]);

  const Search = text => {
    if (text) {
      const newData = dataSearch.filter(item => {
        const itemData = item.doa ? item.doa.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);

      console.log('Filter', data);
    } else {
      setData(dataSearch);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result);
        setDataSearch(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View
      style={{
        backgroundColor: '#712EF6',
      }}>
      <ScrollView style={{}}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/pit.png')}
            style={{
              width: 120,
              height: 50,
              marginTop: 2,
            }}
          />
        </View>
        <TouchableOpacity>
          <Icon name="menu" color={'#fff'} size={45} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setSearch(!search)}>
            <Icon name="search" size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
        {search ? (
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <View style={{position: 'absolute', marginLeft: 10}}>
                <Icon name="search" size={22} color="#fff" />
              </View>
              <TextInput
                placeholder="Search Doa"
                onChangeText={val => Search(val)}
                value={search}
                style={{
                  borderWidth: 1.7,
                  borderColor: '#fff',
                  width: '95%',
                  height: 40,
                  paddingLeft: 45,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        ) : (
          <></>
        )}
        {data.map((item, index) => (
          <View key={index}>
            {/* <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('IsiBible', {
                  ayat: item.content,
                })
              }></TouchableOpacity> */}

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('isiDoa', {
                  doa: item.id,
                })
              }
              style={{
                borderBottomWidth: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="octagon"
                    color={'#989FFF'}
                    size={51}
                    style={{
                      top: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontFamily: 'Rubik-ExtraBold',
                      color: '#fff',
                      fontSize: 15,
                      bottom: 25.5,
                    }}>
                    {item.id}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    justifyContent: 'center',
                    // bottom: 5.5,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Rubik-Bold',
                      color: '#fff',
                    }}>
                    {item.doa}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Doa;

const styles = StyleSheet.create({});
