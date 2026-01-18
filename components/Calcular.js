import { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Resultado from './Resultado';

class Calcular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 0,
      clasificacion: '',
    };
  }

  calcularImc = () => {
    if (!this.state.peso || !this.state.altura) {
      this.setState({ imc: 0, clasificacion: 'Rellena los campos' });
      return;
    }
    const peso = parseFloat(this.state.peso.replace(',', '.'));
    const altura = parseFloat(this.state.altura.replace(',', '.'));

    if (peso > 0 && altura > 0) {
      const resultado = peso / Math.pow(altura, 2);
      let texto;

      switch (true) {
        case resultado < 18.5:
          texto = 'Peso insuficiente';
          break;
        case resultado < 25:
          texto = 'Normopeso';
          break;
        case resultado < 27:
          texto = 'Sobrepeso grado I';
          break;
        case resultado < 30:
          texto = 'Sobrepeso grado II (preobesidad)';
          break;
        case resultado < 35:
          texto = 'Obesidad de tipo I';
          break;
        case resultado < 40:
          texto = 'Obesidad de tipo II';
          break;
        case resultado < 50:
          texto = 'Obesidad de tipo III (mórbida)';
          break;
        default:
          texto = 'Obesidad de tipo IV (extrema)';
          break;
      }
      this.setState({ imc: resultado, clasificacion: texto });
    } else {
      this.setState({ imc: 0, clasificacion: 'Error en datos' });
    }
  };

  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.contenedorDatos}>
          <Text style={styles.titulo}>Datos</Text>
          <Text style={styles.datos}>PESO</Text>
          <TextInput
            style={styles.campos}
            onChangeText={text => this.setState({ peso: text })}
            value={this.state.peso}
            placeholder="Kilogramos"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.datos}>ALTURA</Text>
          <TextInput
            style={styles.campos}
            onChangeText={text => this.setState({ altura: text })}
            value={this.state.altura}
            placeholder="Metros"
            keyboardType="numbers-and-punctuation"
          />
        </View>
        <View style={styles.contenedorBoton}>
          <Pressable style={styles.boton} onPress={this.calcularImc}>
            <Text style={styles.textoBoton}>Calcular IMC</Text>
          </Pressable>
        </View>
        {this.state.clasificacion !== '' && (
          <View style={styles.contenedorResultado}>
            <Text style={styles.tituloResultado}>Resultado</Text>
            <Resultado
              imc={this.state.imc}
              clasificacion={this.state.clasificacion}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'white',
  },
  contenedorDatos: {
    padding: '5%',
  },
  titulo: {
    fontSize: 30,
    color: 'red',
    margin: '3%',
  },
  datos: {
    fontSize: 14,
    color: 'blue',
    marginTop: '3%',
    fontWeight: 'bold',
  },
  campos: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
    padding: '2%',
  },
  contenedorBoton: {
    padding: '2%',
  },
  boton: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#2196F3',
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
    borderLeftWidth: 1,
    borderLeftColor: '#929292',
    borderRightWidth: 1,
    borderRightColor: '#929292',
    padding: '3%',
    borderRadius: 8,
  },
  textoBoton: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2196F3',
    fontWeight: 'bold',
  },
  contenedorResultado: {
    marginBottom: '5%',
    paddingLeft: '5%',
  },
  tituloResultado: {
    fontSize: 16,
    color: 'black',
  },
});

export default Calcular;
