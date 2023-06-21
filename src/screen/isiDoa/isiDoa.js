import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

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
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            alignItems: 'center',
            borderWidth: 2,
            marginTop: 90,
            borderColor: '#fff',
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
              color: '#fff',
            }}>
            {item.doa}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Rubik-Bold',
              color: '#fff',
            }}>
            {item.ayat}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Rubik-Light',
              margin: 10,
              color: '#fff',
            }}>
            {item.latin}
          </Text>
          <Text
            style={{
              fontSize: 27.5,
              fontFamily: 'Rubik-Medium',
              margin: 10,
              color: '#fff',
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
