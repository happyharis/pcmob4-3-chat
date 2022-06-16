import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View>
      <Text>Email</Text>
      <TextInput placeholder="Enter email" />
      <Text>Password</Text>
      <TextInput placeholder="Enter password" secureTextEntry={true} />
    </View>
  );
}

const styles = StyleSheet.create({});
