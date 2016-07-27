import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid, 
  ListView,
  ScrollView
} from 'react-native';

import IssueCard from './IssueCard.js';
import AndroidToolbar from './AndroidToolbar.js';

var fakeData = require('./../data/data.json');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			data: ds.cloneWithRows(fakeData)
		};
	}

	render(){
		return (
			<View style={styles.container}>
				<AndroidToolbar />
				<ListView
					style={styles.listview}
					dataSource={this.state.data}
					renderRow={this._renderRow} />
			</View>
		)
	}

	_renderRow(rowData){
		return (
			<View>
				<IssueCard cardImage={rowData.picture} issueTitle={rowData.name} issueDescription={rowData.about} issueAddress={rowData.address} />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listview: {
		height: 600
	}
});