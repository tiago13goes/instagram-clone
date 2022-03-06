import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'


const Reels = () => {
    return (
        <SafeAreaView style={styles.container}>
            Reels
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})

export default Reels

