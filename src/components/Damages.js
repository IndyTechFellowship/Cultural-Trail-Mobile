import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import Toolbar from '../components/Toolbar';

export default class Damages extends Component {
    constructor(props) {
        super(props);
        console.log('*************Damages***********');
        console.log(props);
    }

    render() {
        return (
            <View>
                <Toolbar/>
                <Text>Hey, it's the damages</Text>
            </View>
        )
    }
}