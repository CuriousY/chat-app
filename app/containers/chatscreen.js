import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setUser, postChat, getChat, setMessage } from '../actions';
import { bindActionCreators } from 'redux'
import stylesheet from '../styles/chatScreenStyle';
import openSocket from 'socket.io-client';


const styles = StyleSheet.create(stylesheet());
const socket = openSocket('http://192.168.1.208:3000');



class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessage: ''
        }
        this.subscribeToChat = this.subscribeToChat.bind(this);
        this.postChatMessage = this.postChatMessage.bind(this);
    }

    subscribeToChat() {
        socket.on('chat', (data) => {            
            let chat = {
                sender: data.sender,
                message: data.message,
                timestamp: data.time
            }
            console.log('recived chat ', chat);
            let chats = this.props.chats;
            chats.push(chat);
            this.props.getChat(chats);
        });

        socket.on('typing', (data) => {
        });
    }

    postChatMessage() {
        // let today = new Date();
        // let timeString = today.getHours() + ":" + getFullMinutes(today.getMinutes());
        // let chat = {
        //     time: "23:14",
        //     message: this.props.message,
        //     mobile: this.props.userData.mobile,
        //     sender: this.props.userData.username
        // }
        // socket.emit('chat', chat);
        // this.props.postChat(chat);
    }

    componentWillReceiveProps(props) {
        console.log('will recieve ');
    }

    shouldComponentUpdate(props){
        console.log('should update ');
    }
    componentWillMount() {
        this.validateSignupState();
        this.subscribeToChat();
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
            console.log('signupvalidation error on chat screen', error);
        }
    };

    static navigationOptions = {
        title: 'ChatWindow',
    };

    render() {
        console.log('render ', this.props.chats.length);
        return (
            <View style={styles.container}>
                <View style={[styles.txtTitleContainer, { height: 400, backgroundColor: '#F3E5F5' }]}>
                    <Chats props={this.props.chats} />
                </View>
                <View style={styles.bottomContainer}>
                    <TextInput underlineColorAndroid='transparent' clearTextOnFocus={true}
                        style={styles.bottomTextInput} placeholder="Start chatting" />
                    <TouchableOpacity style={styles.bottomTouchable} onPress={this.postChatMessage}>
                        <Text style={styles.bottomButtonText}> send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

Chats = (props) => {
    let chats = props.props;
    console.log('props ', chats.length);
    console.log(chats.length);
    if (chats.length > 0) {
        return (
            <View>
                {chats.map((chat, i) => (
                    <View key={i} style={{ borderWidth: 1, marginBottom: 3 }}>
                        <Text>{chat.sender} : {chat.message}</Text>
                        <Text>Time : {chat.timestamp}</Text>
                    </View>
                ))}
            </View>
        )
    }
    else {
        return (
            <View></View>
        )
    }
}
function getFullMinutes(minutes) {
    if (minutes < 10) {
        return '0' + minutes;
    }
    return minutes;
};

function mapStateToProps(state) {
    console.log('maps ', state.userReducer.chats.length);
    return {
        userData: state.userReducer.user,
        chats: state.userReducer.chats,
        message: state.userReducer.message
    }
}


export default connect(mapStateToProps, { setUser, getChat, postChat, setMessage })(ChatScreen);