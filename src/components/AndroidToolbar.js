import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	ToolbarAndroid
} from 'react-native';

export default class AndroidToolbar extends Component {
	render(){
		return (
			<View>
				<ToolbarAndroid
					title="Issues"
					style={styles.toolbar}
					titleColor="#fff"
					actions={[{title: 'Search', icon: require('./../images/search.png'), show: 'always'}]} />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	toolbar : {
		backgroundColor: '#014C7F',
		height: 56
	},
})