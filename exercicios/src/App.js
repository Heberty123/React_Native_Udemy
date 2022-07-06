import React from 'react'
import { View, StyleSheet } from 'react-native'

import Botao from './components/Botao'
import Titulo from './components/Titulo'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'
import Contador from './components/Contador'
import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'

export default () => (
    <View style={style.App}>

        <Diferenciar />
        
        {/*
        <ContadorV2 />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto"
            segundario="Tela de Cadastro do Produto" />
        <MinMax min={5} max={80} />
        <Aleatorio number1={1} number2={90} />
        <Aleatorio number1={1} number2={90} />
        <Aleatorio number1={1} number2={90} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
        
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
        
    }

})
 

