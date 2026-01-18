import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calcular from './components/Calcular';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cabecera}>
          <Text style={styles.textoCabecera}>Calculadora IMC</Text>
        </View>
        <View style={styles.tarjetaPricipal}>
          <Calcular />
        </View>
        <View style={styles.pie}>
          <Text style={styles.textoPie}>
            Angel Valero - Desarrollo de Interfaces 2ºDAM 25/26
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5b0d8b',
  },
  cabecera: {
    marginVertical: '8%',
    alignItems: 'center',
  },
  textoCabecera: {
    fontSize: 32,
    color: 'red',
  },
  tarjetaPricipal: {
    margin: '2%',
  },
  pie: {
    margin: '2%',
  },
  textoPie: {
    color: '#adadad',
    fontSize: 14,
  },
});

export default App;
