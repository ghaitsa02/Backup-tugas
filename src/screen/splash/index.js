import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('doa');
    }, 2000);
  });

  return (
    <View style={styles.animationContainer}>
      <AnimatedLottieView
        source={require('../../assets/icons/splash.json')}
        autoPlay={true}
        loop={true}
      />
      <Text
        style={{
          // fontSize: 55,
          fontFamily: 'Rubik-ExtraBold',
          color: '#000',
          fontSize: 45,
          top: '22.5%',
        }}>
        MY DOA
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#ABFF7A',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
