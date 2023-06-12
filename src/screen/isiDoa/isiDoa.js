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
    <ScrollView>
      {data.map((item, index) => (
        <View key={index}>
          {/* <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('IsiBible', {
                    ayat: item.content,
                  })
                }></TouchableOpacity> */}

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                //color: '#fff',
              }}>
              {item.doa}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                //color: '#fff',
              }}>
              {item.ayat}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                //color: '#fff',
              }}>
              {item.latin}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                //color: '#fff',
              }}>
              {item.artinya}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default IsiDoa;

const styles = StyleSheet.create({});
