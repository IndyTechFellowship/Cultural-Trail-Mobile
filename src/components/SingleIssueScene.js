import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    MapView,
    PickerIOS
} from 'react-native';

import { reduxForm, Field } from 'redux-form'
import Toolbar from './Toolbar';

const PickerItemIOS = PickerIOS.Item;

const PRIORITY_TYPES = {
    high: {
        displayName: 'High Priority'
    },
    medium: {
        displayName: 'Medium Priority'
    },
    low: {
        displayName: 'Low Priority'
    }
};

class IssueDetailsForm extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.issueTitle}
                    placeholder="Issue Title"
                    value={this.props.issueTitle}
                />

                <TextInput
                    style={styles.issueDescription}
                    placeholder="Issue Description"
                    value={this.props.issueDescription}
                />

                {/*<MapView*/}
                    {/*style={styles.map}*/}
                    {/*showsUserLocation={true}*/}
                {/*/>*/}

                {/*<PickerIOS style={styles.priority}>*/}
                    {/*<PickerIOS.Item label="High Priority" value="high"/>*/}
                    {/*<PickerIOS.Item label="Medium Priority" value="medium"/>*/}
                    {/*<PickerIOS.Item label="Low Priority" value="low"/>*/}
                {/*</PickerIOS>*/}

            </View>
        )
    }
}

IssueDetailsForm = reduxForm({
    form: 'IssueDetailsForm'
})(IssueDetailsForm);

export default class SingleIssueScene extends Component {
    constructor(props) {
        super(props);
        console.log('single issue props')
        console.log(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
                <Image
                    resizeMode="contain"
                    source={{uri: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'}}
                    style={styles.image} />

                <IssueDetailsForm/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    issueTitle: {
        height: 40,
        fontSize: 24
    },

    issueDescription: {
        height: 40,
        fontSize: 18
    },

    map: {
        height: 200
    },

    priority: {
        position: 'relative'
    }
});