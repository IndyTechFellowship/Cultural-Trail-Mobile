import React, { Component } from 'react';

import {
	StyleSheet,
	Platform,
	TabBarIOS,
	Text,
	View,
} from 'react-native';

export default class AndroidToolbar extends Component {
	render(){
		if (Platform.OS === 'ios') {
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
		height: 56
	},
});