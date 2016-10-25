import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';


import Toolbar from '../components/Toolbar';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
                <ListView
                    dataSource={ds.cloneWithRows(this.props.damageTypes)}
                    renderRow={this._renderRow}
                />
            </View>
        )
    }

    _renderRow(rowData) {
        return (
            <View>
                <Text>{rowData.item}</Text>
            </View>
        )
    }
}
