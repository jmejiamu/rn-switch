import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { Card } from "../../components";
import { styles } from "./styles";
import Colors from "../../constant/colors";

const Recipe = ({ onDone, name, phone, card, pay }) => {
  return (
    <Card>
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn.pixabay.com/photo/2012/04/13/00/14/phone-31172_960_720.png",
        }}
      />
      <View style={styles.dataContainer}>
        <Text style={styles.subtitle}>Recipe for: {name}</Text>
        <Text style={styles.subtitle}>Phone #{phone}</Text>
        <Text style={styles.subtitle}>Card #{card}</Text>
        <Text style={styles.subtitle}>Paid : ${pay}</Text>
        <Text style={styles.subtitle}>Date: {Date()}</Text>
        <Button title="Done" onPress={onDone} color={Colors.primary} />
      </View>
    </Card>
  );
};

export default Recipe;
