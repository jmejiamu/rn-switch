import { Text, View, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { Card, Input } from "../../components";
import usePayment from "../../hook/usePayment";
import Recipe from "../bill-recipe";

const BillForm = () => {
  const [fullName, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [continuePayment, setContinuePayment] = useState(false);

  const { doPayment, setDoPayment } = usePayment();

  const MONTHLY_PAY = 30;

  const handleCardNumberChange = (text) => {
    setCardNumber(text.replace(/[^0-9]/g, ""));
  };

  const handleCleanInput = () => {
    setCardNumber("");
    setName("");
    setPhoneNumber("");
    setContinuePayment(false);
  };

  const handleFullNameChange = (text) => {
    setName(text);
  };
  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const onSubmitPayment = () => {
    if (
      fullName.length > 0 &&
      phoneNumber.length > 0 &&
      cardNumber.length > 0
    ) {
      setContinuePayment(true);
    } else {
      Alert.alert("Inputs", "Check Inputs", [{ text: "OK", style: "cancel" }]);
    }
  };

  const onSubmitYesPayment = () => {
    setDoPayment(true);
  };

  const onHandleDone = () => {
    setContinuePayment(false);
    setDoPayment(false);
    setCardNumber("");
    setName("");
    setPhoneNumber("");
  };

  let proceedPayment;
  proceedPayment = (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Monthly pay : ${MONTHLY_PAY}</Text>

        <Input
          placeholder="Full Name"
          value={fullName}
          onChangeText={handleFullNameChange}
        />
        <Input
          placeholder="Phone"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <Input
          placeholder="Debit / Credit Number"
          maxLength={16}
          keyBoardType="numeric"
          onChangeText={handleCardNumberChange}
          value={cardNumber}
        />

        <View style={styles.btnContainer}>
          {!continuePayment && (
            <>
              <Button title="Pay" onPress={onSubmitPayment} />
              <Button title="Clean" onPress={handleCleanInput} />
            </>
          )}
        </View>
        {proceedPayment}
      </View>
    </ScrollView>
  );
  if (continuePayment) {
    proceedPayment = (
      <Card>
        <View>
          <Text>Do you want proceed with the payment?</Text>
          <View style={styles.btnContainer}>
            <Button title="Yes" onPress={() => onSubmitYesPayment()} />
            <Button title="No" onPress={handleCleanInput} />
          </View>
        </View>
      </Card>
    );
  }

  if (doPayment) {
    proceedPayment = (
      <Recipe
        onDone={onHandleDone}
        name={fullName}
        phone={phoneNumber}
        card={cardNumber}
        pay={MONTHLY_PAY}
      />
    );
  }

  return <>{proceedPayment}</>;
};

export default BillForm;
