import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { Card } from "../../components";

const Recipe = ({ onDone, name, phone, card, pay }) => {
  return (
    <Card>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2012/04/13/00/14/phone-31172_960_720.png",
        }}
      />
      <View style={{ marginVertical: 20 }}>
        <Text>Recipe for: {name}</Text>
        <Text>Phone #{phone}</Text>
        <Text>Card #{card}</Text>
        <Text>Paid : ${pay}</Text>
        <Text>Date: {Date()}</Text>
        <Button title="Done" onPress={onDone} />
      </View>
    </Card>
  );
};

export default Recipe;
