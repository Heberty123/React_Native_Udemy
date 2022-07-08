import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#999' lado={20}/>
            <Quadrado cor='#F90' lado={30}/>
            <Quadrado cor='#990' lado={40}/>
            <Quadrado cor='#900' lado={50}/>
            <Quadrado cor='#009' lado={60}/>
            <Quadrado cor='#099' lado={70}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        height: 350,
        backgroundColor: '#000'
    }
})