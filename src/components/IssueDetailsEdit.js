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

import { Icon, Divider } from 'react-native-material-design';

import { reduxForm, Field } from 'redux-form'
import Toolbar from './Toolbar';

class IssueDetailsForm extends Component {
    render() {
        return (
            <View>

                <Text style={styles.tinyLabel}>Issues</Text>

                <TextInput
                    style={styles.issueTitle}
                    placeholder="Issue Title"
                    value={this.props.issueTitle}
                />

                <Divider style={styles.divider}/>

                <Text style={styles.tinyLabel}>More Details</Text>

                <TextInput
                    style={styles.issueDescription}
                    placeholder="Issue Description"
                    value={this.props.issueDescription}
                />

                <Divider style={styles.divider}/>

                <Text style={styles.tinyLabel}>Location</Text>

                <Divider style={styles.divider}/>

                <Text style={styles.tinyLabel}>Priority</Text>

                <Divider style={styles.divider}/>


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

export default class IssueDetailsEdit extends Component {
    constructor(props) {
        super(props);
        console.log('single issue props')
        console.log(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
                <View style={styles.innerContainer}>
                    {/*<Image*/}
                        {/*resizeMode="contain"*/}
                        {/*source={{uri: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'}}*/}
                        {/*style={styles.image} />*/}

                    <IssueDetailsForm/>
                    {/*<Icon name="menu"/>*/}
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        padding: 20
    },
    divider: {
        marginVertical: 20,
        borderRadius: 10
    },
    tinyLabel: {
        fontSize: 14
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
        fontSize: 24,
        paddingVertical: 10
    },

    issueDescription: {
        height: 40,
        fontSize: 18,
        paddingVertical: 10
    },

    map: {
        height: 200
    },

    priority: {
        position: 'relative'
    }
});