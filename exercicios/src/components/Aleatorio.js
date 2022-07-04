import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    const aleatorio = Math.floor((Math.random() * (props.number1-props.number2)) + props.number2);

    return (
        <Text style={Estilo.txtG}>
            Número aleatório entre {props.number1} e {props.number2} é: {aleatorio}
        </Text>
    )
}