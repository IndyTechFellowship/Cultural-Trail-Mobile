
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import ActionButton from 'react-native-action-button';

import IssueCard from './IssueCard.js';
import AndroidToolbar from './AndroidToolbar.js';
import Icon from 'react-native-vector-icons/Ionicons';

let fakeData = require('./../data/data.json');
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class IssuesScene extends Component {
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
				<ActionButton
  					buttonColor="#98B82A"
  					onPress={() => { console.log("hi")}}
				/>
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
	},
	actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});