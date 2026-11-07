import { useState } from 'react';
import { Alert, LayoutAnimation, Platform } from 'react-native';


// Habilitar LayoutAnimation en Android
if (Platform.OS === 'android') {
  // UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// Función para animar el layout
const animarLayout = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

// Función para activar la retroalimentación háptica


// Función principal
export const usoCalculadora = () => {
  const [mostrar, setDisplay] = useState<string>('0');
  const [result, setResult] = useState<string>('');

  // Función para limitar la cantidad de números
  const funcionNumero = (n: number) => {
    animarLayout();
    const numeroActual = mostrar.replace(/\D/g, '');
    if (numeroActual.length >= 50) {
      Alert.alert('Aviso', 'No se pueden usar más números');
      return;
    }
    setDisplay(prev => (prev === '0' ? String(n) : prev + n));
  };

  

  // Función para limpiar la pantalla
  const funcionLimpiar = () => {
    animarLayout();
    setDisplay('0');
    setResult('');
  };

  // Función para agregar operadores
  const funcionOperadores = (op: string) => {
    animarLayout();
    setDisplay(prev => prev + ' ' + op + ' ');
  };

  // Función para calcular el porcentaje
  const funcionPorcentaje = () => {
    animarLayout();
    try {
      const numeroActual = eval(mostrar);
      const valorPorcentaje = numeroActual / 100;
      setDisplay(String(valorPorcentaje));
    } catch {
      setResult('Error');
    }
  };

  // Función para calcular el resultado
  const funcionCalcular = () => {
    animarLayout();
    try {
      const evalResultado = eval(mostrar);
      setResult(String(evalResultado));
    } catch {
      setResult('Error');
    }
  };

  // Función para agregar decimales en la pantalla
  const funcionDecimal = () => {
    animarLayout();
    const parts = mostrar.split(/[\+\-\*\/]/);
    const numeroActual = parts[parts.length - 1];
    if (!numeroActual.includes('.')) {
      setDisplay(prev => prev + '.');
    }
  };

  // Función para borrar un número
  const funcionBorrar = () => {
    animarLayout();
    setDisplay(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  return {
    mostrar,
    result,
    funcionNumero,
    funcionLimpiar,
    funcionOperadores,
    funcionPorcentaje,
    funcionCalcular,
    funcionDecimal,
    funcionBorrar,
  };
};