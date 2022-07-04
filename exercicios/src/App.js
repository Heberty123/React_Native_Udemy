import React from 'react'
import { View, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <MinMax min={5} max={80} />
        <Aleatorio number1={1} number2={90} />
        <Aleatorio number1={1} number2={90} />
        <Aleatorio number1={1} number2={90} />


        {/*
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
 

