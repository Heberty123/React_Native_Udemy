import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Botao from './components/Botao'
import Titulo from './components/Titulo'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'
import Contador from './components/Contador'
/*
import Pai from './components/indireta/Pai'
*/
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'

export default () => (
    <SafeAreaView style={style.App}>
        
        <UsuarioLogado usuario={{ nome: 'gui', email: 'gui@gui.com' }} />

        {/*
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3} />
        <Diferenciar />
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
        
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
        
    }

})
 

