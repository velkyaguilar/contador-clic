import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contador({ numero }) {
  return (
    <View style={styles.contador}>
      <Text style={styles.texto}>{numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contador: {
    
    borderColor: 'white',
    borderWidth: 2,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  texto: {
    color: 'white',
    fontSize: 90,
    fontWeight: 'bold',
  },
});
