
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
import Toolbar from './Toolbar.js';
import Icon from 'react-native-vector-icons/Ionicons';
import storage from 'react-native-simple-store';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class IssuesScene extends Component {
	constructor(props){
		super(props);
        if(props.issuesResponse === null){
          props.getIssues()
        }
	}

	render(){
    const hasIssues = this.props.issuesResponse !== null
    if(hasIssues) {
      return (
        <View style={styles.container}>
          <Toolbar/>
          <ListView
            style={styles.listview}
            dataSource={ds.cloneWithRows(this.props.issuesResponse.data)}
            renderRow={this._renderRow} />
          <ActionButton
              buttonColor="#98B82A"
              onPress={() => { console.log("hi")}}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Toolbar />
        </View>
      )
    }
	}

	_renderRow(rowData){
		return (
			<View>
				<IssueCard
                    onPress={() => {this.props.onSingleIssueClicked(rowData)}}
                    cardImage={rowData.imageUrl}
                    issueTitle={rowData.name}
                    issueDescription={rowData.description}
                    issueAddress="TBD" />
			</View>
		)
	}
}


IssueCard.propTypes = {
    onSingleIssueClicked: React.PropTypes.func.isRequired
};

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
