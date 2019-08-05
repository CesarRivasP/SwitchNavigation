import React from "react";
import { View, TextInput } from "react-native";
import { Card, Button, Input, Text } from "react-native-elements";
import { onSignIn } from "../auth";

 const SignUp = ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>

      <Text>Email</Text>
      <TextInput placeholder="Email address..." />
      <Text>Password</Text>
      <TextInput secureTextEntry placeholder="Password..." />
      <Text>Confirm Password</Text>
      <TextInput secureTextEntry placeholder="Confirm Password..." />
      <Button
        buttonStyle={{ marginTop: 20 }}
        color="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        color="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Card>
  </View>
)

export default SignUp
