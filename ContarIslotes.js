import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContarIslotes = () => {
  const [frase, setFrase] = useState('');
  const [numeroIslotes, setNumeroIslotes] = useState(0);

  const contarIslotes = () => {
    const fraseMinusculas = frase.toLowerCase(); 
    let count = 0;
    for (let i = 0; i < fraseMinusculas.length - 2; i++) {
      if (fraseMinusculas[i] === fraseMinusculas[i + 2] && fraseMinusculas[i] !== fraseMinusculas[i + 1]) {
        count++;
      }
    }
    setNumeroIslotes(count);
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa una frase:</Text>
      <TextInput
        style={styles.input}
        value={frase}
        onChangeText={(text) => setFrase(text)}
      />
      <Button title="Contar Islotes" onPress={contarIslotes} />
      <Text style={styles.result}>
        Número de islotes: {numeroIslotes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default ContarIslotes;
