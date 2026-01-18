import { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Resultado extends Component {
  render() {
    const { imc, clasificacion } = this.props;
    let colorTexto;
    switch (true) {
      case imc == 0:
        colorTexto = 'black';
        break;
      case imc < 27:
        colorTexto = 'green';
        break;
      case imc < 40:
        colorTexto = 'orange';
        break;
      default:
        colorTexto = 'red';
        break;
    }

    return (
      <View>
        {clasificacion && (
          <Text style={[styles.textoClasificacion, { color: colorTexto }]}>
            {clasificacion}
          </Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textoClasificacion: {
    fontSize: 16,
  },
});

export default Resultado;
