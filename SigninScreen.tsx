import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut, FadeInUp, FadeInLeft, FadeInDown } from 'react-native-reanimated';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
    const navigation = useNavigation();
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <LottieView
            style={styles.lottieConatinerFirst}
            source={require('./assets/animation_lo33lx9e.json')}
            autoPlay
          />
          <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.login}>Welcome Back</Animated.Text>
          <Animated.Text entering={FadeInLeft.duration(1000).springify()} style={styles.signc}>Sign To Continue</Animated.Text>
        </View>
        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Enter Your email"

          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()}>
          <TextInput
            style={styles.pass}
            mode="outlined"
            label="Password"
            placeholder="Enter your password"

          />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
          <TouchableOpacity style={styles.button}>
            <Button
              mode="contained"
              style={styles.buttonBorder}
            >
              LOGIN
            </Button>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()}>
          <Text
            style={styles.account}
            onPress={()=> navigation.push('signup')}
          >
            Don't have any account? <Text style={styles.sign}>Sign up</Text>
          </Text>
        </Animated.View>
      </View>
    </PaperProvider>
  )
}
const styles = StyleSheet.create({
  login: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4c1d95',
  },
  signc: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  loginContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 7,
  },
  pass: {
    marginTop: 5,
  },
  buttonBorder: {
    borderRadius: 0,
  },
  account: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  sign: {
    color: '#4c1d95',
    fontWeight: 'bold',
  },
  lottieConatinerFirst: {
    resizeMode: "cover",
    height: 250,
    width: 250,
  },
});

export default SigninScreen