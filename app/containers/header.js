import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class HeaderTitle extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo = async () => {
        try {
            const isSignUpStarted = await AsyncStorage.getItem('signUpCompleteFlag');
            const mobile = await AsyncStorage.getItem('mobile');

            if (isSignUpStarted) {
                console.log('fetch mob header', mobile);
                this.props.getUser(mobile);
            }
        } catch (error) {
            console.log('signupvalidation err ', error);
        }
    }
    render() {
        return (
            <HeaderView props={this.props.currentUser} />
        )

    }
}

const HeaderView = (props) => {
    let user = props.props.user ? props.props.user : null;
    if (user) {
        return (
            <View style={{
                flex: 1, alignItems: 'stretch', flexDirection: 'row',
                backgroundColor: '#BA68C8', width: 400
            }}>
                <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 30 }}
                        source={{ uri: `http://192.168.43.119:3000/${user.imagepath}` }} />
                </View>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.username}</Text>
                </View>
            </View>
        )
    }
    else {
        return (
            <View>
                <Text> Not fetched </Text>
            </View>
        )
    }
};



function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.fetchedUser
    }
}

export default connect(mapStateToProps, { getUser })(HeaderTitle);