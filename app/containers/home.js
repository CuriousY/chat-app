import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import HeaderTitle from './header'

class HomeScreen extends Component {
    static navigationOptions = {
        headerLeft: (
            <HeaderTitle />
        )
    };
    constructor(props) {
        super(props);
        this.state = {
            mobile: ''
        };
        this._onPressButton = this._onPressButton.bind(this);

    }

    _onPressButton() {
        alert('clicked ');
    }

    componentWillMount() {
        this.validateSignupState();
    };

    validateSignupState = async () => {
        try {
            const isSignUpStarted = await AsyncStorage.getItem('signUpCompleteFlag');
            const mobile = await AsyncStorage.getItem('mobile');

            if (isSignUpStarted) {                
            console.log('fetch mob ', this.state.mobile);            
             this.props.getUser(mobile);
            }
            else {
                this.props.navigation.navigate('WelcomeScreen');
            }
        } catch (error) {
            console.log('signupvalidation err ', error);
        }
    };

    render() {
        return (
            <View style={{ height: 'auto' }}>
                <UserView props={this.props.currentUser} onPress={this._onPressButton} />
                <UserView props={this.props.currentUser} onPress={this._onPressButton} />
            </View>

        )
    }
}

const UserView = (props) => {
    let user = props.props.user ? props.props.user : null;
    if (user) {
        return (
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={{
                    borderBottomWidth: 1, backgroundColor: '#E1BEE7', height: 50, flexDirection: 'row'
                }}>
                    <View>
                        <Image style={{ width: 40, height: 40, borderRadius: 30, marginTop: 2 }}
                            source={{ uri: `http://192.168.1.208:3000/${user.imagepath}` }} />
                    </View>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text style={{ marginTop: 10 }}> Hi There</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, width: 400 }}>
                <Text> Not fetched </Text>
            </View>
        )
    }
};

const DefaultUserView = (props) => (
    <View>
        <Text>Not fetched</Text>
    </View>
);

function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.fetchedUser
    }
}


export default connect(mapStateToProps, { getUser })(HomeScreen);
