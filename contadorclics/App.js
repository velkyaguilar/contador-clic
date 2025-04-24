import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import Contador from './Componentes/Contador';
import Boton from './Componentes/Boton';

export default function App() {
  const [numero, setNumero] = useState(0);

  const aumentar = () => setNumero(numero + 1);
  const reiniciar = () => setNumero(0);

  const decrementer = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    } else {
      Alert.alert('Acción denegada', 'No se puede decrementar por debajo de 0');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logos/1.png')} style={styles.logo} />
      <Contador numero={numero} />
      <Boton texto="Clic" onPress={aumentar} color="blue" />
      <Boton texto="Reiniciar" onPress={reiniciar} color="green" />
      <Boton texto="Decrementar" onPress={decrementer} color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a23',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    marginBottom: 30,
    fontFamily: 'monospace',
  },
});