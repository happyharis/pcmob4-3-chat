import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="Enter email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
