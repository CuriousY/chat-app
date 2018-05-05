import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import stylesheet from '../styles/welcomeScreenStyle';

const styles = StyleSheet.create(stylesheet());

export default class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props) {
        super(props);
    }
    initiateSignUp = async () => {
        await AsyncStorage.setItem('initSignUpFlag', 'true');
        this.props.navigation.navigate('SignUp');
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtTitleContainer}>
                    <Text style={styles.txtWelcome}>Welcome to FamChats</Text>
                </View>

                <View style={styles.imgFamilyContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image style={styles.imgFamily}
                            source={require('../../assets/family.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.btnEnterContainer}>
                    <TouchableOpacity style={styles.tchEnter} onPress={this.initiateSignUp}>
                        <Text style={styles.txtEnter}> Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

