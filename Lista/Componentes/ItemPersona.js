import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableHighlight } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements';
import { imagenes } from '../Imagenes/servicioimagenes';

export class ItemPersona extends Component {
    constructor() {
        super();
        this.state = {
            color: 'transparent',
            contador: 0
        }
    }
    render() {
        const { indice, obj, fn_eliminar, fn_seleccionar } = this.props;
        const { id, nombre, telefono } = obj;
        return (
            <View style={styles.lista}>
                <View style={styles.imagen}>
                    <Avatar
                        rounded
                        source={imagenes[indice]}
                        title={nombre.substring(0, 1)}
                    />
                </View>
                <View style={styles.texto}>
                    <TouchableHighlight
                        onPress={() => {
                            fn_seleccionar(obj);
                        }}>
                        <View>
                            <Text style={styles.lista}>{indice}-{nombre}</Text>
                            <Text style={styles.lista}>{telefono}</Text>
                        </View>
                    </TouchableHighlight>
                    <CheckBox
                        title='Activo'
                        checked={obj.activo}
                        onPress={() => {
                        }}
                    />
                </View>
                <View style={styles.botones}>
                <Button
                    title="X"
                    onPress={() => {
                        fn_eliminar(obj);
                    }}
                />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    lista: {
        marginTop: 10,
        flex: 1,
        flexDirection:'row'
    },
    imagen: {
        flex:1
    },
    texto: {
        flex:6,
        flexDirection: 'column'
    },
    botones: {
        flex:1
    }
});
