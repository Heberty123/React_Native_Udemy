import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#999' />
            <Quadrado cor='#F90' />
            <Quadrado cor='#990' />
            <Quadrado cor='#900' />
            <Quadrado cor='#009' />
            <Quadrado cor='#099' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})