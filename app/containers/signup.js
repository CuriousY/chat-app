import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux'
import stylesheet from '../styles/signUpStyle';

const styles = StyleSheet.create(stylesheet());

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mobile: ''
        }
        this.SignUpUser = this.SignUpUser.bind(this);
        this.handleUserNameText = this.handleUserNameText.bind(this);
        this.handleMobileText = this.handleMobileText.bind(this);
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
            this.props.navigation.navigate('ImageUpload');
        }
    }
    componentWillMount() {
        this.validateSignupState();
    }

    SignUpUser() {
        let user = {
            username: this.state.username,
            mobile: this.state.mobile
        }

        this.props.setUser(user);
        this.setMobileInAsyncStorage(this.state.mobile);
    }


    setMobileInAsyncStorage = async (mobile) => {
        try {
            await AsyncStorage.setItem('mobile', mobile);
        }
        catch (err) {
            console.log('err ', err);
        }
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
        title: 'SignUp',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtTitleContainer}>
                    <Text style={styles.txtLabel}>Your name :</Text>
                    <TextInput onChangeText={(text) => { this.handleUserNameText(text) }} underlineColorAndroid='transparent' clearTextOnFocus={true}
                        style={styles.textBox} placeholder="" />
                </View>

                <View style={styles.txtTitleContainer}>
                    <Text style={styles.txtLabel}>Mobile number : </Text>
                    <TextInput keyboardType={'numeric'} onChangeText={(text) => { this.handleMobileText(text) }} underlineColorAndroid='transparent' clearTextOnFocus={true}
                        style={styles.textBox} placeholder="" />
                </View>

                <View style={styles.btnEnterContainer}>
                    <TouchableOpacity style={styles.tchEnter} onPress={this.SignUpUser}>
                        <Text style={styles.txtEnter}> Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
}


export default connect(mapStateToProps, { setUser })(SignUpScreen);