import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Boton({ texto, onPress, color }) {
  const fondo = color === 'blue' ? 'blue' : 'blue' ;

  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: fondo }]} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    boton: {
      width: 200,
      paddingVertical: 15,
      marginVertical: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    texto: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
