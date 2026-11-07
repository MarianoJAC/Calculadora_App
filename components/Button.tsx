import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/Colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: object | any[]; 
};

export default function Boton({ title, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.boton, style]}>
      <Text style={styles.textoBoton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  boton: {
    backgroundColor: colors.colorBoton, 
    padding: 20,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
  },
  textoBoton: {
    color: colors.textoBoton, 
    fontSize: 24,
    fontWeight: 'bold',
  },
});