import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';
import {ItemPersona} from './Componentes/ItemPersona';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox } from 'react-native-elements';

export default class App extends Component {
  constructor(){
    super();
    this.personas=[{id:'10',nombre:'Harold', telefono:'099853945', activo:true},
                  {id:'11',nombre:'Leslie', telefono:'09985455', activo:true},
                  {id:'12',nombre:'Luis', telefono:'099343945', activo:true}];
    this.state ={
      listaPersonas: this.personas,
      idPersona:"",
      nombrePersona:"",
      telefonoPersona:"",
      activoPersona:false,
      actualizar: false
    }
  }
  eliminar = persona=>{
    let posicion=this.buscar(persona);
    if(posicion!=-1){
      this.personas.splice(posicion,1);
    }
    this.setState({listaPersonas:this.personas});
  }
  buscar = persona=>{
    let posicion = -1;
    for(let i=0; i<this.personas.length; i++){
      if(this.personas[i].id==persona.id){
        posicion=i;
        break;
      }
    }
    return posicion;
  }
  agregar = persona =>{
    let posicion= this.buscar(persona);
    if(posicion==-1){
      this.personas.push(persona)
    }
    else{
      Alert.alert("La persona ya existe!!");
    }
    this.setState({listaPersonas:this.personas});
    this.limpiar();
  }
  seleccionar = (persona) =>{
    let posicion= this.buscar(persona);
    if(posicion!=-1){
      this.state.nombrePersona=persona.nombre;
      this.state.telefonoPersona=persona.telefono;
      this.state.idPersona=persona.id;
      this.state.activoPersona=persona.activo;
      this.setState({actualizar:true});
    }
    this.setState({listaPersonas:this.personas});
  }
  actualizar = persona=>{
    let posicion= this.buscar(persona);
    if(posicion!=-1){
      this.personas[posicion].id=persona.id;
      this.personas[posicion].nombre=persona.nombre;
      this.personas[posicion].telefono=persona.telefono;
      this.personas[posicion].activo=persona.activo;
    }
    else{
      Alert.alert('No se puede actualizar...');
    }
    this.setState({listaPersonas:this.personas});
    this.limpiar();
    this.setState({actualizar:false}); //Para mostrar nuevamente el input id
  }
  limpiar = ()=>{
    this.setState({idPersona:"",nombrePersona:"",telefonoPersona:"",activoPersona:false});
  }

  render(){
  return (
    <View style={styles.container}>
       { this.state.actualizar==false && 
      <Input
      leftIcon={
        <Icon
          name='key'
          size={24}
          color='black'
        />
      }
      value={this.state.idPersona}
      onChangeText={id=>{
        this.setState({idPersona:id});
      }}
      placeholder=" ID"
      />}
      <Input 
      leftIcon={
        <Icon
          name='user-plus'
          size={24}
          color='black'
        />
      }
      value={this.state.nombrePersona}
      onChangeText={nombre=>{
        this.setState({nombrePersona:nombre});
      }}
      placeholder=" NOMBRE"
      />
      <Input
      leftIcon={
        <Icon
          name='volume-control-phone'
          size={24}
          color='black'
        />
      }
      value={this.state.telefonoPersona}
      onChangeText={telefono=>{
        this.setState({telefonoPersona:telefono});
      }}
      placeholder=" TELEFONO"
      />
      <CheckBox
      title='Activo'
      checked={this.state.activoPersona}
      onPress={() => this.setState({activoPersona: !this.state.activoPersona})}
     />
      { this.state.actualizar==false && 
      <Button
      title="Guardar"
      onPress={()=>{
        this.agregar({id:this.state.idPersona,nombre:this.state.nombrePersona, telefono:this.state.telefonoPersona, activo:this.state.activoPersona});
      }}
      />}
      { this.state.actualizar && 
      <Button
      title="Actualizar"
      onPress={
        ()=>{
          this.actualizar({id:this.state.idPersona,nombre:this.state.nombrePersona, telefono:this.state.telefonoPersona, activo:this.state.activoPersona});
        }
      }
      />}
      <Text/>
      <Text style={styles.lista}>LISTA DE PERSONAS</Text>
      <FlatList
        data={this.state.listaPersonas}
        renderItem={({item,index})=>{
          return <ItemPersona 
            obj={item} 
            indice={index}
            fn_eliminar={this.eliminar} 
            fn_seleccionar={this.seleccionar}
         />}  }
        keyExtractor={p=>(p.id)}
      />
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop:30,
    marginLeft:10,
    marginRight:10
  },
  lista:{
    textAlign:"center",
    fontWeight: "bold"
  }
  
});
