import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const IsiDoa = ({route, navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://doa-doa-api-ahmadramadhan.fly.dev/api/${route.params.doa}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#712EF6',
      }}>
      <TouchableOpacity
        onPress={() => navigation.replace('doa')}
        style={{
          marginRight: '90%',
        }}>
        <Icon name="arrowleft" size={55} color={'#000'} />
      </TouchableOpacity>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            alignItems: 'center',
            borderWidth: 2,
            marginTop: 90,
            borderColor: '#000',
          }}>
          {/* <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('IsiBible', {
                    ayat: item.content,
                  })
                }></TouchableOpacity> */}
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Rubik-ExtraBold',
              margin: 10,
              color: '#000',
            }}>
            {item.doa}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Rubik-Bold',
              color: '#000',
            }}>
            {item.ayat}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Rubik-Light',
              margin: 10,
              color: '#000',
            }}>
            {item.latin}
          </Text>
          <Text
            style={{
              fontSize: 27.5,
              fontFamily: 'Rubik-Medium',
              margin: 10,
              color: '#000',
            }}>
            {item.artinya}.
          </Text>
        </View>
      ))}
    </View>
  );
};

export default IsiDoa;

const styles = StyleSheet.create({});
