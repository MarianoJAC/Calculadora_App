import React from 'react';
import { View } from 'react-native';

import Boton from '../components/Button';
import Texto from '../components/Text';
import { usoCalculadora } from '../hooks/Funciones';
import { globalStyles } from '../styles/global_styles';

export default function Calculadora() {
  const {
    mostrar,
    result,
    funcionNumero,
    funcionLimpiar,
    funcionOperadores,
    funcionPorcentaje,
    funcionCalcular,
    funcionDecimal,
    funcionBorrar,
  } = usoCalculadora();

 return (
  <View style={globalStyles.contenedorCalculadora}>
    {/* Display */}
    <View style={globalStyles.Display}>
      {/* Resultado fijo */}
      {result !== '' && (
        <View style={globalStyles.resultadoContainer}>
          <Texto
            autoFit
            style={[globalStyles.verTexto, globalStyles.verResultado]}
          >
            {String(result)}
          </Texto>
        </View>
      )}

      {/* Operación con autoajuste */}
      <View style={globalStyles.operacionContainer}>
        <Texto autoFit style={globalStyles.verTexto}>
          {String(mostrar)}
        </Texto>
      </View>
    </View>

    {/* Botones */}
    <View style={globalStyles.fila}>
      <Boton title="C" onPress={funcionLimpiar} style={globalStyles.botonBorrar} />
      <Boton title="%" onPress={funcionPorcentaje} style={globalStyles.botonPorcentaje} />
      <Boton title="÷" onPress={() => funcionOperadores('/')} style={globalStyles.botonOperacion} />
      <Boton title="→" onPress={funcionBorrar} style={globalStyles.botonBorrar} />
    </View>

    <View style={globalStyles.fila}>
      <Boton title="7" onPress={() => funcionNumero(7)} style={globalStyles.boton} />
      <Boton title="8" onPress={() => funcionNumero(8)} style={globalStyles.boton} />
      <Boton title="9" onPress={() => funcionNumero(9)} style={globalStyles.boton} />
      <Boton title="×" onPress={() => funcionOperadores('*')} style={globalStyles.botonOperacion} />
    </View>

    <View style={globalStyles.fila}>
      <Boton title="4" onPress={() => funcionNumero(4)} style={globalStyles.boton} />
      <Boton title="5" onPress={() => funcionNumero(5)} style={globalStyles.boton} />
      <Boton title="6" onPress={() => funcionNumero(6)} style={globalStyles.boton} />
      <Boton title="-" onPress={() => funcionOperadores('-')} style={globalStyles.botonOperacion} />
    </View>

    <View style={globalStyles.fila}>
      <Boton title="1" onPress={() => funcionNumero(1)} style={globalStyles.boton} />
      <Boton title="2" onPress={() => funcionNumero(2)} style={globalStyles.boton} />
      <Boton title="3" onPress={() => funcionNumero(3)} style={globalStyles.boton} />
      <Boton title="+" onPress={() => funcionOperadores('+')} style={globalStyles.botonOperacion} />
    </View>

    <View style={globalStyles.fila}>
      <Boton title="0" onPress={() => funcionNumero(0)} style={[globalStyles.boton, { flex: 3 }]} />
      <Boton title="." onPress={funcionDecimal} style={globalStyles.boton} />
      <Boton title="=" onPress={funcionCalcular} style={globalStyles.botonCalcular} />
    </View>
  </View>
);
}