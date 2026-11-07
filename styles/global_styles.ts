import { StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';

export const globalStyles = StyleSheet.create({

  contenedorCalculadora: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 50,
    backgroundColor: colors.Contenedor,
  },

  
  Display: {
    backgroundColor: colors.Display,
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minHeight: 150,
    maxHeight: 150,
    width: '100%',
  },

resultadoContainer: {
  minHeight: 30,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '100%',
},

operacionContainer: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '100%',
},


verTexto: {
  fontSize: 60,
  fontWeight: 'bold',
  color: colors.text,
  textAlign: 'right',
  width: '100%',
},


  verResultado: {
    fontSize: 40,
    color: colors.resultado,
    marginTop: 5,
  },


  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },

  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },

  boton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    margin: 8,
    fontSize: 30,
  },


  botonC: {
    backgroundColor: colors.bontonC,
  },

  botonBorrar: {
    backgroundColor: colors.botonBorrar,
  },

  botonPorcentaje: {
    backgroundColor: colors.botonesOperador,
  },

  botonOperacion: {
    backgroundColor: colors.botonesOperador,
  },

  botonCalcular: {
    backgroundColor: colors.botonesOperador,
    width: 70,
    height: 70,
  },
});