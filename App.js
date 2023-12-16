import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [operation, setOperation] = useState('sumar');

  const [result, setResult] = useState();

  const operations = [
    { label: 'Sumar', value: 'sumar' },
    { label: 'Restar', value: 'restar' },
    { label: 'Multiplicar', value: 'multiplicar' },
    { label: 'Dividir', value: 'dividir' }, // Agregamos la operación de división
  ];

  const calculate = () => {
    let res;
    if (num1 === '' || num2 === '') {
      alert('Please enter both numbers.');
      return;
    }
    if (operation === 'dividir' && num2 === '0') {
      alert('Cannot divide by zero.');
      return;
    }
    if (operation === 'sumar') {
      res = parseFloat(num1) + parseFloat(num2);
    } else if (operation === 'restar') {
      res = parseFloat(num1) - parseFloat(num2);
    } else if (operation === 'multiplicar') {
      res = parseFloat(num1) * parseFloat(num2);
    } else if (operation === 'dividir') {
      res = parseFloat(num1) / parseFloat(num2);
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: 'orange',
          color: 'white',
          textAlign: 'center',
        }}>
        Suma de dos numeros
      </Text>
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'magenta',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Número 1"
        placeholderTextColor="white"
        onChangeText={(text) => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />

      <TextInput
        style={{
          height: 40,
          backgroundColor: 'magenta',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Número 2"
        placeholderTextColor="white"
        onChangeText={(text) => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />

      <RNPickerSelect
        style={{
          inputAndroid: {
            height: 50,
            marginTop: 10,
            backgroundColor: 'magenta',
            color: 'white',
            fontWeight: 'bold',
          },
          inputIOS: {
            height: 50,
            marginTop: 10,
            backgroundColor: 'magenta',
            color: 'white',
            fontWeight: 'bold',
          },
        }}
        placeholder={{
          label: 'Selecciona una operación',
          value: null,
          color: 'white',
        }}
        onValueChange={(value) => setOperation(value)}
        items={operations}
      />
      <Text style={{ fontSize: 24, marginTop: 10 }}>Result: {result}</Text>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
