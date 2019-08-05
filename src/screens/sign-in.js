import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { onSignIn } from "../auth";

const SignIn = ({ navigation }) => {

  return (
    <Card>
      <Text>Email</Text>
      <TextInput placeholder="Email address..." />
      <Text>Password</Text>
      <TextInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
