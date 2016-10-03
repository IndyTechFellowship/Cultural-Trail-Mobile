import React, { Component } from 'react';

import {
	StyleSheet,
	TabBarIOS,
	Text,
	View,
} from 'react-native';

export default class AndroidToolbar extends Component {
	render(){
		return (
			<View>
				<TabBarIOS
					unselectedTintColor="yellow"
					tintColor="white"
					barTintColor="#014C7F"
					style={styles.toolbar}>

					<TabBarIOS.Item
						systemIcon="search" >
					</TabBarIOS.Item>

					<TabBarIOS.Item
						title="Tab 2" >
					</TabBarIOS.Item>
				</TabBarIOS>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	toolbar : {
		backgroundColor: '#014C7F',
		height: 56
	},
});