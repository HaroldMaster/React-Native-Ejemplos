import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,Alert,TextInput } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      nombre:"",
      apellido:""
    };
  }
  render(){
  return (
    <View style={styles.container}>
      <Text>Bienvenido Harold</Text>
      <TextInput
        value={this.state.nombre}
        onChangeText={(textonuevo)=>{
          this.setState({
            nombre: textonuevo
          })
        }}
        placeholder="Nombre"
      />
      <TextInput
        value={this.state.apellido}
        onChangeText={(textonuevo)=>{
          this.setState({
            apellido: textonuevo
          })
        }}
        placeholder="Apellido"
      />
      <Button title="ok" 
      onPress={()=>{
        Alert.alert("Hola :)"+" "+this.state.nombre+" "+this.state.apellido)
      }}/>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
