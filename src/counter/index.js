import React, { useEffect, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { connect } from "react-redux";
import {increment, decrement, reset} from '../redux/actions'

const Tombol = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'white',backgroundColor: props.warna, padding: 10, marginRight: 5 , marginBottom:10}} onPress={props.onPress}>{props.judul}</Text>
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
                        <Tombol warna='blue' judul='INCREMENT 5' onPress={() => this.props.increment({payload: 11})} />
                        <Tombol warna='orange' judul='DECREMENT 5' onPress={() => this.props.decrement({payload: 11})} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Tombol warna='black' judul='RESET' onPress={this.props.reset} />
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
    increment : ({payload}) => dispatch(increment(payload)),
    decrement : ({payload}) => dispatch(decrement(payload)),
    reset : () => dispatch(reset()),
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
