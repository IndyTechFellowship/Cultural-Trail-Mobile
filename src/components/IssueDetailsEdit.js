import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    MapView,
    PickerIOS,
    TouchableHighlight
} from 'react-native';

import { Icon, Divider } from 'react-native-material-design';

import { reduxForm, Field } from 'redux-form'
import Toolbar from './Toolbar';

class IssueDetailsForm extends Component {
    constructor(props) {
        super(props);
        console.log('**********Issue Details Form***********');
        console.log(props.dataSource);
    }

    render() {
        return (
            <View>

                <Text style={styles.tinyLabel}>Issue</Text>
                <Text style={styles.details}>Select Issue Type</Text>
                <TouchableHighlight overlayColor="white" onPress={() => console.log('hey')}>
                    <View style={styles.buttonWrapper}><Icon name="chevron-right" color="#000000"  /></View>
                </TouchableHighlight>
                <Divider style={styles.divider}/>

                <Text style={styles.tinyLabel}>Damages</Text>
                <Text style={styles.details}>Select Damage Type</Text>
                <TouchableHighlight overlayColor="white" onPress={() => console.log('hey')}>
                    <View style={styles.buttonWrapper}><Icon name="chevron-right" color="#000000"  /></View>
                </TouchableHighlight>
                <Divider style={styles.divider}/>

                <Text style={styles.tinyLabel}>More Details</Text>
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
        console.log('single issue props');
        console.log(props);
        super(props);
        if (props.damagesResponse === null) {
            props.getDamages();
            console.log(props);
        }
    }

    render() {
        const hasDamages = this.props.damagesResponse !== null;
        if (hasDamages) {
            return (
                <View style={styles.container}>
                    <Toolbar />
                    <View style={styles.innerContainer}>
                        {/*<Image*/}
                        {/*resizeMode="contain"*/}
                        {/*source={{uri: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'}}*/}
                        {/*style={styles.image} />*/}

                        <IssueDetailsForm dataSource={this.props.damagesResponse.data}/>
                        {/*<Icon name="menu"/>*/}
                    </View>
                </View>
            )
        } else {
            return (
                // TODO: handle else case
                <View style={styles.container}>
                    <Toolbar />
                </View>
            )
        }
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        padding: 20
    },
    inputContainer: {
        alignItems: 'stretch'
    },
    divider: {
        marginVertical: 16,
        borderRadius: 10
    },
    tinyLabel: {
        color: '#696969',
        fontSize: 12,
        paddingVertical: 16,
    },
    buttonWrapper: {
        backgroundColor: '#ffffff'
    },
    details: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 12
    },
    iconArrow: {
        // color: '#000000',
        justifyContent: 'flex-end'
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