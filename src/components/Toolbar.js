import React, { Component } from 'react';

import {
    StyleSheet,
    Platform,
    TabBarIOS,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class Toolbar extends Component {
    render(){
        if (Platform.OS === 'ios') {
            return (
                <View>
                    <StatusBar
                        barStyle="default"
                        />
                    <View style={styles.toolbar}>
                        <Text style={styles.toolbarTitle}>Issues</Text>
                    </View>
                </View>
        );
        } else if (Platform.OS === 'android') {
            return (
                <View>
                <ToolbarAndroid
                    title="Issues"
                    style={styles.toolbar}
                    titleColor="#fff"
                    actions={[{title: 'Search', icon: require('./../images/search.png'), show: 'always'}]} />
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
    toolbar : {
        backgroundColor: '#014C7F',
        height: 56,
        alignItems: 'center'
    },
    toolbarTitle : {
        top: 20,
        alignItems: 'center',
        fontSize: 20,
        color: '#fff'
    }
});