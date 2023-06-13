import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  DrawerLayoutAndroid,
  Linking,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome5';

const Doa = ({route, navigation}) => {
  const [search, setSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [data, setData] = useState([]);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const drawer = useRef(null);

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

  const url1 = `https://wa.me/62895622733040`;
  const url2 = `https://facebook.com`;

  const navigationView = () => {
    const reportWa = () => {
      Linking.openURL(url1)
        .then(() => {
          console.log('sukses');
        })
        .catch(() => {
          console.log('error');
        });
    };

    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
          }}>
          {/* <ImageBackground
            source={require('../../assets/images/Quran.png')}
            style={{
              width: 300,
              height: 325,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontFamily: 'Poppins-ExtraBold',
                marginTop: 275,
              }}
              onPress={() => alertLogin()}>
              MY QUR'AN
            </Text>
          </ImageBackground> */}
        </View>
        {/* <View
          style={{
            width: '85%',
            marginLeft: 22.5,
          }}>
          <TouchableOpacity
            onPress={() => {
              reportWa('');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8333f2',
              marginTop: 140,
              borderRadius: 15,
              height: 65,
            }}>
            <Icon3 name="customerservice" size={45} color={'#000'} />
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-ExtraBold',
                margin: 10,
              }}>
              REPORT A PROBLEM
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '85%',
            marginLeft: 22.5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8333f2',
              marginTop: 50,
              borderRadius: 15,
              height: 65,
            }}>
            <Icon4 name="quran" size={45} color={'#000'} />
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-ExtraBold',
                margin: 10,
              }}>
              ABOUT APLICATION
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => drawer.current.closeDrawer()}
          style={{
            alignItems: 'center',
            marginTop: 90,
            marginLeft: 175,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#000',
              fontSize: 40,
              marginTop: 25,
            }}>
            Exit
          </Text>
          <Icon3 name="arrowright" size={35} color={'#000'} />
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerBackgroundColor={'#29E0F5'}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      style={styles.container}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Icon name="menu" color={'#fff'} size={45} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Rubik-ExtraBold',
                color: '#fff',
                fontSize: 25,
                top: 10,
              }}>
              Doa-doa harian
            </Text>
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
                  borderBottomWidth: 1,
                  borderTopWidth: 2,
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
                        fontSize: 17,
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
    </DrawerLayoutAndroid>
  );
};

export default Doa;

const styles = StyleSheet.create({});
