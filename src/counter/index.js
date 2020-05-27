import React, { useEffect, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react';
import { connect } from "react-redux";
const Tombol = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <Text style={{ fontSize: 25, backgroundColor: props.warna, padding: 10, marginRight: 5 , marginBottom:10}} onPress={props.onPress}>{props.judul}</Text>
            </TouchableOpacity>
        </View>
    )
}

class Counter extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={{ fontSize: 30 }}>Basic Redux</Text>
                    <Text style={styles.text}>Hello World!</Text>
                    <Text style={{ fontSize: 25 }}>{this.props.count}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Tombol warna='green' judul='INCREMENT 1' onPress={this.props.increment} />
                        <Tombol warna='red' judul='DECREMENT 1' onPress={this.props.decrement} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Tombol warna='blue' judul='INCREMENT 5' onPress={this.props.increment5} />
                        <Tombol warna='orange' judul='DECREMENT 5' onPress={this.props.decrement5} />
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    increment : () => dispatch({type: 'INCREMENT'}),
    decrement : () => dispatch({type: 'DECREMENT'}),
    increment5 : () => dispatch({type: 'INCREMENT', payload: 5}),
    decrement5 : () => dispatch({type: 'DECREMENT', payload: 5})
})


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        fontSize: 25
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
