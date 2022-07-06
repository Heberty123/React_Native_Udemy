import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ number1, number2 }) => {
    const aleatorio = Math.floor((Math.random() * (number1-number2)) + number2);

    return (
        <Text style={Estilo.txtG}>
            Número aleatório entre {number1} e {number2} é: {aleatorio}
        </Text>
    )
}