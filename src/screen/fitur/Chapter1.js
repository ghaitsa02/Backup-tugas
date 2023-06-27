import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Chapter1 = () => {
  const getData = async () => {
    try {
      const hasil = await axios.get;
    } catch (err) {}
  };
  return (
    <View>
      <Text>Chapter1</Text>
    </View>
  );
};

export default Chapter1;

const styles = StyleSheet.create({});
