import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,Alert,TextInput } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      val1:"0",
      val2:"0",
      res:"0"
  }
  }
  render(){
  return (
    <View style={styles.container}>
      <Text>--CALCULADORA--</Text>
      <TextInput
        value={this.state.val1}
        onChangeText={(textonuevo)=>{
          this.setState({
            val1: textonuevo
          })
        }}
        placeholder="Primer Valor"
      />
      <TextInput
        value={this.state.val2}
        onChangeText={(textonuevo)=>{
          this.setState({
            val2: textonuevo
          })
        }}
        placeholder="Apellido"
      />
      <Button title="Sumar" 
      onPress={()=>{
        let value_1=parseInt(this.state.val1);
        let value_2=parseInt(this.state.val2);
        let respuesta= value_1+value_2;
        this.setState({
          res: respuesta
        })
      }}/>
      <Text
      style ={styles.texto}
      > 
      {this.state.res} 
      </Text>
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
texto:{
    borderColor:'gray',
    borderWidth:1,
    fontSize: 20,
    fontWeight: "bold"
  }
});
