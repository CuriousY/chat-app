import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux'
import stylesheet from '../styles/signUpStyle';

const styles = StyleSheet.create(stylesheet());

class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mobile: ''
        }
    }

    handleMobileText(text) {
        this.setState({
            ...this.state,
            mobile: text
        });
    }

    handleUserNameText(text) {
        this.setState({
            ...this.state,
            username: text
        });
    }
    componentWillReceiveProps(props) {
        if (props.user.is_signup_complete) {

        }
    }
    componentWillMount() {
        this.validateSignupState();
    }

    validateSignupState = async () => {
        try {
            const isSignUpStarted = await AsyncStorage.getItem('initSignUpFlag');

            if (isSignUpStarted) {
            }
            else {
                this.props.navigation.navigate('WelcomeScreen');
            }
        } catch (error) {
            console.log('signupvalidation err ', error);
        }
    };

    static navigationOptions = {
        title: 'ChatWindow',
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} enabled>
                    <View style={[styles.txtTitleContainer, { height: 400, backgroundColor: '#F3E5F5' }]}>
                        <Text style={styles.txtLabel}>Your name :</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        height: 40,
                        justifyContent: 'space-between',
                        backgroundColor: '#F44336',
                        alignSelf: 'flex-end'
                    }}>
                        <TextInput onChangeText={(text) => { this.handleMobileText(text) }} underlineColorAndroid='transparent' clearTextOnFocus={true}
                            style={{
                                height: 40,
                                color: '#4a148c',
                                fontSize: 15,
                                backgroundColor: '#fff',
                                width: 300,
                                paddingLeft:10,
                                alignSelf:'flex-start',
                                borderColor: 'gray',
                                borderWidth: 1
                            }} placeholder="Start chatting" />
                        <TouchableOpacity style={{
                            backgroundColor: '#8e24aa',
                            height: 40,
                            width: 70,
                            alignSelf: 'flex-end',
                            paddingBottom: 5
                        }} onPress={this.SignUpUser}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#F3E5F5',
                                paddingTop: 5,
                                paddingLeft:5
                            }}> send</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
}


export default connect(mapStateToProps, { setUser })(ChatScreen);